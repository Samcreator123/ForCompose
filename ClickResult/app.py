from flask import Flask,jsonify
from flask_socketio import SocketIO,emit
import requests
import threading
import time
import json

app = Flask(__name__)
socketio = SocketIO(app,cors_allowed_origins='*')

def get_data():
    return requests.get('http://worker:3333/Worker/Get').text

def send_data():
    while True:
        data = get_data()
        socketio.emit('data',json.dumps({'num':int(data)}))
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