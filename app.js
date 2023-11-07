const express = require('express');
const fs = require('fs'); // fs 모듈을 불러옵니다.
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/text', (req, res) => {
    const chatData = req.body;

    // 서버에서 수행할 작업 (필요한 경우)

    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("서버 오류");
        } else {
            const jsonData = JSON.parse(data);
            jsonData.mainContent.inputRecords.push(chatData);
            fs.writeFile('data.json', JSON.stringify(jsonData), 'utf8', (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send("서버 오류");
                } else {
                    res.json({ message: "data.json에서 전송할 message" });

                    //html message 전송 내용 확인
                    const jsonData = JSON.parse(data);
                    res.json(jsonData);

                }
            });
        }
    });
});

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


