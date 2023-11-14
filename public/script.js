const result = document.getElementById("result");
const chat = document.getElementById("chat");
const send = document.getElementById("send");
const info = document.getElementById("info");
const title = document.getElementById("title");

// 입력한 데이터를 data.json으로 key의 맞춰 전송
send.addEventListener("click", function (event) {
    if (chat.value === "") {
        alert("내용을 입력해주세요!");
        chat.focus();
    } else {
        const message = chat.value;
        const timestamp = new Date().toLocaleTimeString();
        const chatData = {
            type: "user",
            message: message,
            timestamp: timestamp
        };

        // JSON 데이터를 서버로 전송
        fetch("/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chatData)
        })
        .then(response => response.json())
        .then(data => {

            //이 구간에 갱신되는 작업으로 수정해야함


            

        });

        const li = document.createElement("li");
        li.textContent = `${chatData.type}: ${chatData.message} (${chatData.timestamp})`;
        result.appendChild(li);
        chat.value = "";
        chat.focus();
    }
});



//data.json에서 채팅 내용을 불러오는 구간
function fetchDataAndUpdateUI() {
    fetch("/data")
    .then(response => response.json())
    .then(data => {
        // data 객체에서 필요한 정보를 가져와 사용
        const hamburgerMenu = data.hamburgerMenu;
        const inputRecords = data.inputRecords;
        const userInfo = data.userInfo;

        // TODO: 가져온 데이터를 활용하여 UI를 업데이트하는 작업 수행
        const messageData = inputRecords.Date || "채팅내역 불러오기";
        result.textContent = messageData;

        inputRecords.forEach(record => {
            const li = document.createElement("li");
            li.textContent = `${record.type} : ${record.message} [${record.timestamp}]`;
            result.appendChild(li);
        });

        const userName = userInfo.name || "Unknown"; // name이 없으면 "Unknown"을 사용
        info.textContent = userName;
        const userStatus = userInfo.status || "알 수 없음";
        title.textContent = userStatus;

        console.log(inputRecords);
        console.log(userInfo);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}

// 페이지가 열리면 자동으로 데이터를 가져옴
window.addEventListener('load', fetchDataAndUpdateUI);