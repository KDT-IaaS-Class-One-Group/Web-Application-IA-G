const { json } = require('express');
const express = require('express')
const router = express.Router();
const fs = require("fs");


router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});




router.post('/text', (req, res) => {
  const chatData = req.body;

  // 서버에서 수행할 작업 (필요한 경우)
  fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
          console.error(err);
          res.status(500).send("서버 오류");
      } else {
          const jsonData = JSON.parse(data);
          console.log("POST로 넘어온 데이터 : " + jsonData);

          jsonData.mainContent.inputRecords.push(chatData);
          fs.writeFile('data.json', JSON.stringify(jsonData), 'utf8', (err) => {
              if (err) {
                  console.error(err);
                  res.status(500).send("서버 오류");
              } else {
                  res.json({ message: "data.json에서 전송할 message" });

                  
                  // html message 전송 내용 확인
                  const jsonData = JSON.parse(data);
                  // res.json(jsonData);

              }
          });
      }
  });
});

module.exports = router