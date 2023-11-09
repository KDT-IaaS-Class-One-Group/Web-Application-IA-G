// express 모듈을 불러옵니다.
const express = require('express');
const router = require('./routes')

const bodyParser = require("body-parser");

// fs 모듈을 불러옵니다.
const fs = require('fs');

// express 애플리케이션을 생성합니다.
const app = express();

// 서버의 포트를 1004로 설정합니다.
const port = 1004;


// JSON 형식의 요청 데이터를 파싱하기 위해 express의 미들웨어를 사용합니다.

app.use(bo)

app.use(express.json());
app.use(express.static(__dirname));

// '/' 경로에 라우터를 적용합니다.
app.use("/", router);

// 주석 처리된 코드 블록은 '/initialData' 경로에 대한 GET 요청을 처리하는 코드입니다.
// 이 코드는 'data.json' 파일을 읽어와 JSON 형식으로 응답합니다.
// 현재는 주석 처리되어 비활성화 상태입니다.

// 서버를 지정된 포트(1004)로 실행합니다.
app.listen(port, () => {
    console.log("서버가 열렸습니다.");
});
