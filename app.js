const express = require('express');
const fs = require('fs'); // fs 모듈을 불러옵니다.
const app = express();
const port = 1004;
const router = require('./routes')
// const path = require('path'); //이거 사용안함

app.use(express.json());



// public 폴더에 정적 파일 제공
app.use(express.static('public'));

app.use("/", router);



app.listen(port, () => {
    console.log("서버가 열렸습니다.");
});


// 0.4ver