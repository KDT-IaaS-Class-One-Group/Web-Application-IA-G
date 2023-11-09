const express = require('express');
const fs = require('fs'); // fs 모듈을 불러옵니다.
const app = express();
const port = 1004;
const router = require('./routes')

app.use(express.json());
app.use(express.static('public'))//public 폴더 안에 있는 모듈 서빙


app.use("/", router);

//html 페이지 메시지 내역을 표시하기 위한 코드
// app.get("/initialData", (req, res) => {
//     fs.readFile('data.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send("서버 오류");
//         } else {
//             const jsonData = JSON.parse(data);
//             res.json(jsonData);
//         }
//     });
// });



app.listen(port, () => {
    console.log("서버가 열렸습니다.");
});
