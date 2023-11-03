const express = require('express'); // 서버 통신 방식 설계
const app = express();  //express를 app 객체에 담아 사용하려는 목적
const http = require("http");  //http 모듈을 사용하기 위한 선언
const fs = require("fs") //fs 모듈을 사용하기 위한 선언(index.html 페이지와 통신하기 위한 규약)

const server = http.createServer(app); //express 방식으로 서버 생성
const port = 8080; //포트 미리 선언하여 사용

// const io = socketIo(server);//소켓이 필요할지 안할지 나중에 구현하면 결정


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/about", (req, res) => {
    res.send("<h1> 테스트 메시지 </h1/>")
})


app.listen(port, () => {
    console.log("server open");
})





//검증 코드
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });
// app.get("/sub", (req, res) => {
//     res.sendFile(path.join(__dirname, "sub.html"));
// });
