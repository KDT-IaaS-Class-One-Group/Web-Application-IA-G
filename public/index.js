const result = document.getElementById("result");
const chat = document.getElementById("chat");
const send = document.getElementById("send");
const form = document.getElementById("my-form")

//엔터 누르면 이동되지않게 변경
form.addEventListener('submit', (e) => {
  e.preventDefault();
})
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

    // 전달되는 데이터 확인용
    // console.log("메시지 전송 확인 message", message);
    // console.log("메시지 전송 확인 time", timestamp);
    // console.log("메시지 전송 확인 chatData", chatData);


    // JSON 데이터를 서버로 전송




    fetch("/text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(chatData)
    })
      .then(response => response.json())
      .then(data => {
        // 서버에서 전달된 응답 처리 (필요하면)
        console.log(data);
      });


    // 여기가 data.json에서 가져온 데이터들을 표시하는 영역
    const li = document.createElement("li");
    li.textContent = chatData.type + " : " + chatData.message + "[" + chatData.timestamp + "]";
    result.appendChild(li);
    chat.value = "";
    chat.focus();
  }
});