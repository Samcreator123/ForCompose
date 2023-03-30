const express = require('express');
const http = require('http');
const fs = require('fs');

// 建立 Express 應用程式
const app = express();

const options = 
{
    hostname : "worker",
    port: 3333,
    path: '/Worker/Click',
    method : 'GET'
}

app.get('/',(req,res)=>{
  fs.readFile('./index.html',(err,data)=>{
    if(err)
    {
      res.status(404).send('404 Not Found')    
    }
    else
    { 
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      res.write(data);
      res.end();
    }
  })

})

app.get('/ClickButton', async (req, res) => {
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
        console.log(error);
        res.status(500).send("Internal Server Error");
      });
      
      //結束請求(一定要有不然不會發送)
      req.end();

    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  });
  

app.on('error',(error)=>{
  console.log(error);
})

// 啟動伺服器
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});