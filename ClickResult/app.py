from flask import Flask,jsonify
from flask_socketio import SocketIO,emit
import pyodbc
import threading
import time
import json

app = Flask(__name__)
socketio = SocketIO(app,cors_allowed_origins='*')

def get_data():
    cnxn = pyodbc.connect('DRIVER={SQL Server};SERVER=@db;DATABASE=TEST;UID=sa;PWD=Sam008125')

    cursor = cnxn.cursor()

    cursor.execute('SELECT TOP 1 Number FROM Click_Counter;')

    rows = cursor.fetchall()

    data = []

    for row in rows:
        for num in row:   
            data.append(num)

    cursor.close()
    cnxn.close()

    return data

def send_data():
    while True:
        data = get_data()
        socketio.emit('data',json.dumps({'num':int(data[0])}))
        time.sleep(1)
    

@socketio.on('connect')
def send_num():
    print('Client Connected!')
    thread = threading.Thread(target=send_data)
    thread.start()

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    socketio.run(app,debug = True)