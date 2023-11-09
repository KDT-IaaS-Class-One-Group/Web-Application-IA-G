// express 모듈을 불러옵니다.
const express = require('express');

// express의 라우터를 생성합니다.
const router = express.Router();

// fs 모듈을 불러옵니다.
const fs = require("fs");


// ////////////////////////테스트 1 /////////////////////////////////////// //
// '/data' 경로에 대한 GET 요청을 처리하는 라우트 핸들러입니다.
router.get('/data', (req, res) => {
    // 'data.json' 파일을 읽어옵니다.
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send("서버 오류");
      } else {
        // 읽어온 JSON 데이터를 파싱합니다.
        const jsonData = JSON.parse(data);
  
        // JSON 데이터를 클라이언트로 보냅니다.
        res.json(jsonData);
      }
    });
  });
  // ////////////////////////테스트 1 /////////////////////////////////////// // 주석이여


// 정적 파일 제공 설정


// 루트 경로('/')에 대한 GET 요청을 처리하는 라우트 핸들러입니다.
router.get("/", (req, res) => {
  // 현재 스크립트 파일의 디렉토리에서 'index.html' 파일을 응답으로 보냅니다.
  res.sendFile(__dirname + "/index.html");
});


// '/text' 경로에 대한 POST 요청을 처리하는 라우트 핸들러입니다.
router.post('/text', (req, res) => {
  // 요청에서 전송된 데이터를 'chatData' 변수에 저장합니다.
  const chatData = req.body;

  // 서버에서 수행할 작업을 주석으로 처리했으며, 필요한 경우 여기에 작업을 추가할 수 있습니다.

  // 'data.json' 파일을 읽어옵니다.
  fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
          console.error(err);
          res.status(500).send("서버 오류");
      } else {
          // 읽어온 JSON 데이터를 파싱합니다.
          const jsonData = JSON.parse(data);

          // 'mainContent.inputRecords' 배열에 새로운 'chatData'를 추가합니다.
          jsonData.mainContent.inputRecords.push(chatData); //이거 html에서 보낸 req를 추가한거임

        // 데이터 전송 확인 테스트

        // 수정된 데이터를 'data.json' 파일에 다시 씁니다.
        //   fs.writeFile('data.json', JSON.stringify(jsonData), 'utf8', (err) => {
        //       if (err) {
        //           console.error(err);
        //           res.status(500).send("서버 오류");
        //       } else {
        //           // 테스트 완료 이 부분은 현재 사용되지 않는 듯합니다.
        //           res.json({ message: "data.json에서 전송할 message" });

        //           // 수정된 데이터를 클라이언트에 응답으로 보낼 수도 있습니다.
        //           // const jsonData = JSON.parse(data);
        //           // res.json(jsonData);
        //       }
        //   });
      }
  });
});

// 이 라우터 모듈을 외부로 노출합니다.
module.exports = router;
