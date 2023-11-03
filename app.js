const express = require('express'); // 서버 통신 방식 설계
const app = express();  //express를 app 객체에 담아 사용하려는 목적
const http = require("http");  //http 모듈을 사용하기 위한 선언
const fs = require("fs") //fs 모듈을 사용하기 위한 선언(index.html 페이지와 통신하기 위한 규약)


const server = http.createServer(app); //express 방식으로 서버 생성
const port = 8080; //포트 미리 선언하여 사용

const bodyParser = require('body-parser') //body에서 받은 데이터 파싱하여 처리


const css = "./Module/index.css"

//서버 get으로 전달
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
    // res.sendFile(__dirname + "/test.css")

})
app.listen(port, () => {
    console.log("server open");
})


app.use(bodyParser.json()) // parse application/json
app.use(bodyParser.urlencoded({extended: false})) // parse application/x-www-form-urlencoded

// post로 데이터 받기
app.post('/text', function(req,res){
    const a = req.body.chat;
    const b = req.body.chatArea;
    const c = req.body.result;

    console.log(a, b, c);


    // const info = req.body.info;
    // const data = req.body.chat;



})



// app.post("/app.js", (req, res) => {
//     if (!req.files || Object.keys(req.files).length === 0) {
    
//         return res.status(400).send("파일이 업로드되지 않았습니다.");



//     }


// const io = socketIo(server);//소켓이 필요할지 안할지 나중에 구현하면 결정

//검증 코드
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// });
// app.get("/sub", (req, res) => {
//     res.sendFile(path.join(__dirname, "sub.html"));
// });
