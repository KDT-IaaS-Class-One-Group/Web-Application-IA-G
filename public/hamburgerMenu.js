        // JavaScript 코드 추가
        document.addEventListener("DOMContentLoaded", function () {
          // 각 메뉴 아이템에 대한 기능 정의
          document.getElementById("home").addEventListener("click", function () {
              // Home을 클릭했을 때의 동작
              window.location.href = "/";
          });

          document.getElementById("profile").addEventListener("click", function () {
              // Profile을 클릭했을 때의 동작
              alert("접속자 명: [사용자명]");
          });

          document.getElementById("settings").addEventListener("click", function () {
              // Settings을 클릭했을 때의 동작
              alert("다크 모드를 선택할 수 있는 토글을 보여줘");
          });

          document.getElementById("logout").addEventListener("click", function () {
              // Logout을 클릭했을 때의 동작
              window.close(); // 페이지를 닫거나 다른 로그아웃 동작을 수행
          });
      });