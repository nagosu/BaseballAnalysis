// league.js
document.addEventListener("DOMContentLoaded", function () {
  function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const leagueName = getParameterByName("league");
  const leagueImage = document.getElementById("leagueImage");
  const emblemsContainer = document.getElementById("emblemsContainer");
  const stadiumImage = document.querySelector(".stadium img");
  const homeTeamName = document.getElementById("homeTeamName");
  const homeTeamImage = document.getElementById("homeTeamImage");
  const awayTeamName = document.getElementById("awayTeamName");
  const awayTeamImage = document.getElementById("awayTeamImage");
  const homeTeamContainer = document.getElementById("homeTeamContainer");
  const awayTeamContainer = document.getElementById("awayTeamContainer");

  let homeTeamSelected = false;
  let awayTeamSelected = false;
  let currentHomeEmblem = null;
  let currentAwayEmblem = null;

  const emblemsData = {
    mlb: [
      {
        src: "../static/assets/images/emblem/mlb1.png",
        top: "100px",
        left: "200px",
        stadium: "../static/assets/images/stadium/mlb1.jpeg",
      },
      {
        src: "../static/assets/images/emblem/mlb2.png",
        top: "150px",
        left: "250px",
        stadium: "../static/assets/images/stadium/mlb2.jpeg",
      },
      // 추가 엠블럼 위치
    ],
    kbo: [
      {
        src: "../static/assets/images/kbo/doosan.png",
        top: "230px",
        left: "520px",
        stadium: "../static/assets/images/stadium/kbo/doosan-lg.png",
      },
      {
        src: "../static/assets/images/kbo/hanhwa.png",
        top: "380px",
        left: "500px",
        stadium: "../static/assets/images/stadium/kbo/hanhwa.jpeg",
      },
      {
        src: "../static/assets/images/kbo/kiwoom.png",
        top: "210px",
        left: "460px",
        stadium: "../static/assets/images/stadium/kbo/kiwoom.jpeg",
      },
      {
        src: "../static/assets/images/kbo/kt.png",
        top: "270px",
        left: "490px",
        stadium: "../static/assets/images/stadium/kbo/kt.jpeg",
      },
      {
        src: "../static/assets/images/kbo/lg.png",
        top: "180px",
        left: "520px",
        stadium: "../static/assets/images/stadium/kbo/doosan-lg.png",
      },
      {
        src: "../static/assets/images/kbo/lotte.png",
        top: "535px",
        left: "700px",
        stadium: "../static/assets/images/stadium/kbo/lotte.jpeg",
      },
      {
        src: "../static/assets/images/kbo/nc.png",
        top: "570px",
        left: "610px",
        stadium: "../static/assets/images/stadium/kbo/nc.png",
      },
      {
        src: "../static/assets/images/kbo/samsung.png",
        top: "455px",
        left: "630px",
        stadium: "../static/assets/images/stadium/kbo/samsung.jpeg",
      },
      {
        src: "../static/assets/images/kbo/ssg.png",
        top: "190px",
        left: "350px",
        stadium: "../static/assets/images/stadium/kbo/ssg.jpeg",
      },
      {
        src: "../static/assets/images/kbo/kia.png",
        top: "550px",
        left: "400px",
        stadium: "../static/assets/images/stadium/kbo/kia.jpeg",
      },
    ],
    npb: [
      {
        src: "../static/assets/images/emblem/npb1.png",
        top: "300px",
        left: "400px",
        stadium: "../static/assets/images/stadium/npb1.jpeg",
      },
      {
        src: "../static/assets/images/emblem/npb2.png",
        top: "350px",
        left: "450px",
        stadium: "../static/assets/images/stadium/npb2.jpeg",
      },
      // 추가 엠블럼 위치
    ],
  };

  if (leagueName) {
    switch (leagueName.toLowerCase()) {
      case "mlb":
        leagueImage.src = "../static/assets/images/league/mlb.jpeg";
        leagueImage.style.width = "800px";
        leagueImage.style.marginLeft = "300px";
        // 엠블럼 추가
        addEmblems(emblemsData.mlb);
        break;
      case "kbo":
        leagueImage.src = "../static/assets/images/league/kbo.png";
        leagueImage.style.width = "800px";
        leagueImage.style.marginLeft = "150px";
        // 엠블럼 추가
        addEmblems(emblemsData.kbo);
        break;
      case "npb":
        leagueImage.src = "../static/assets/images/league/npb.jpeg";
        leagueImage.style.width = "930px";
        leagueImage.style.marginLeft = "0px"; // 필요에 따라 조정
        // 엠블럼 추가
        addEmblems(emblemsData.npb);
        break;
      default:
        leagueImage.alt = "League image not found";
    }
  } else {
    leagueImage.alt = "No league specified";
  }

  function addEmblems(emblems) {
    emblemsContainer.innerHTML = ""; // 기존 엠블럼 제거
    emblems.forEach((emblem) => {
      const emblemElement = document.createElement("img");
      emblemElement.src = emblem.src;
      emblemElement.className = "emblem";
      emblemElement.style.position = "absolute";
      emblemElement.style.width = "60px"; // 너비 고정
      emblemElement.style.top = emblem.top;
      emblemElement.style.left = emblem.left;
      emblemElement.dataset.src = emblem.src;
      emblemElement.dataset.stadium = emblem.stadium;
      emblemElement.addEventListener("click", function () {
        const emblemRect = emblemElement.getBoundingClientRect();
        const homeTeamImageRect = homeTeamImage.getBoundingClientRect();
        const stadiumRect = stadiumImage.getBoundingClientRect();
        const scaleX = stadiumRect.width / emblemRect.width;
        const scaleY = stadiumRect.height / emblemRect.height;

        if (homeTeamSelected) {
          if (currentHomeEmblem) {
            emblemsContainer.appendChild(currentHomeEmblem); // 이전 HOME 엠블럼 복구
          }

          stadiumImage.src = emblem.stadium;
          stadiumImage.style.transition = "none"; // 애니메이션 초기화
          stadiumImage.style.transformOrigin = `${
            emblemRect.left - stadiumRect.left + emblemRect.width / 2
          }px ${emblemRect.top - stadiumRect.top + emblemRect.height / 2}px`;
          stadiumImage.style.transform = `scale(${1 / scaleX}, ${1 / scaleY})`;
          stadiumImage.offsetHeight; // 레이아웃 트리거
          stadiumImage.style.transition = "transform 1s ease";
          stadiumImage.style.transform = "scale(1, 1)";

          homeTeamImage.src = emblem.src;
          homeTeamImage.style.transition = "none"; // 애니메이션 초기화
          homeTeamImage.style.transformOrigin = `${
            emblemRect.left - homeTeamImageRect.left + emblemRect.width / 2
          }px ${
            emblemRect.top - homeTeamImageRect.top + emblemRect.height / 2
          }px`;
          homeTeamImage.style.transform = `scale(${1 / scaleX}, ${1 / scaleY})`;
          homeTeamImage.offsetHeight; // 레이아웃 트리거
          homeTeamImage.style.transition = "transform 1s ease";
          homeTeamImage.style.transform = "scale(1, 1)";

          currentHomeEmblem = emblemElement;
          homeTeamSelected = false; // Reset selection
          homeTeamName.style.color = ""; // Reset color
          emblemElement.remove(); // 지도에서 엠블럼 제거
        } else if (awayTeamSelected) {
          if (currentAwayEmblem) {
            emblemsContainer.appendChild(currentAwayEmblem); // 이전 AWAY 엠블럼 복구
          }
          awayTeamImage.src = emblem.src;
          currentAwayEmblem = emblemElement;
          awayTeamSelected = false; // Reset selection
          awayTeamName.style.color = ""; // Reset color
          emblemElement.remove(); // 지도에서 엠블럼 제거
        }
      });
      emblemsContainer.appendChild(emblemElement);
    });
  }

  homeTeamName.addEventListener("click", function () {
    homeTeamSelected = true;
    awayTeamSelected = false; // AWAY 선택 해제
    homeTeamName.style.color = "red"; // 클릭한걸 알 수 있게 색 변경
    awayTeamName.style.color = ""; // AWAY 색상 초기화
  });

  awayTeamName.addEventListener("click", function () {
    awayTeamSelected = true;
    homeTeamSelected = false; // HOME 선택 해제
    awayTeamName.style.color = "blue"; // 클릭한걸 알 수 있게 색 변경
    homeTeamName.style.color = ""; // HOME 색상 초기화
  });
});
