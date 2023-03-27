const { error } = require('console');
const express = require('express');
const http = require('http');
const { resolve } = require('path');
const url = require('url');

// 建立 Express 應用程式
const app = express();

const options = 
{
    hostname : "localhost",
    port: 3333,
    path: '/Click',
    method : 'GET'
}

// 處理 GET /callBackend 請求
app.get('/callBackend', async (req, res) => {
    try {

      // 建立發送 HTTP 請求
      const req = http.request(options, (response) => {
        let data = "";
        
        //監聽 data 事件，監聽伺服器回傳的資料  
        response.on("data", (chunk) => {
          data += chunk;
        });
        
        //監聽 end 事件，證明伺服器回傳所有的資料了
        response.on("end", () => {
          //將資料回傳給客戶端
          res.send(data);
        });
      });

      req.on("error", (error) => {
        console.error(error);
        res.status(500).send("Internal Server Error");
      });
      
      //結束請求(一定要有不然不會發送)
      req.end();

    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
  

app.on('error',(error)=>{
  console.error(error);
})

// 啟動伺服器
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});