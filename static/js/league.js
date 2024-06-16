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
        src: "../static/assets/images/mlb/angels.png",
        top: "290px",
        left: "500px",
        stadium: "../static/assets/images/stadium/mlb/angels.webp",
        size: "35px",
      },
      {
        src: "../static/assets/images/mlb/astros.png",
        top: "430px",
        left: "830px",
        stadium: "../static/assets/images/stadium/mlb/astros.jpeg",
      },
      {
        src: "../static/assets/images/mlb/athletics.png",
        top: "230px",
        left: "470px",
        stadium: "../static/assets/images/stadium/mlb/athletics.webp",
      },
      {
        src: "../static/assets/images/mlb/braves.png",
        top: "360px",
        left: "1000px",
        stadium: "../static/assets/images/stadium/mlb/braves.jpeg",
        size: "70px",
      },
      {
        src: "../static/assets/images/mlb/brewers.png",
        top: "150px",
        left: "925px",
        stadium: "../static/assets/images/stadium/mlb/brewers.jpeg",
      },
      {
        src: "../static/assets/images/mlb/cardinals.png",
        top: "270px",
        left: "930px",
        stadium: "../static/assets/images/stadium/mlb/cardinals.png",
      },
      {
        src: "../static/assets/images/mlb/cubs.png",
        top: "195px",
        left: "920px",
        stadium: "../static/assets/images/stadium/mlb/cubs.webp",
      },
      {
        src: "../static/assets/images/mlb/diamondbacks.png",
        top: "290px",
        left: "570px",
        stadium: "../static/assets/images/stadium/mlb/diamondbacks.jpg",
      },
      {
        src: "../static/assets/images/mlb/dodgers.png",
        top: "300px",
        left: "455px",
        stadium: "../static/assets/images/stadium/mlb/dodgers.webp",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/giants.png",
        top: "235px",
        left: "410px",
        stadium: "../static/assets/images/stadium/mlb/giants.jpeg",
        size: "60px",
      },
      {
        src: "../static/assets/images/mlb/indians.png",
        top: "190px",
        left: "1030px",
        stadium: "../static/assets/images/stadium/mlb/indians.jpeg",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/jays.png",
        top: "135px",
        left: "1045px",
        stadium: "../static/assets/images/stadium/mlb/jays.webp",
        size: "55px",
      },
      {
        src: "../static/assets/images/mlb/mariners.png",
        top: "40px",
        left: "500px",
        stadium: "../static/assets/images/stadium/mlb/mariners.jpeg",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/marlins.png",
        top: "480px",
        left: "1100px",
        stadium: "../static/assets/images/stadium/mlb/marlins.jpg",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/mets.png",
        top: "190px",
        left: "1170px",
        stadium: "../static/assets/images/stadium/mlb/mets.webp",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/nationals.png",
        top: "280px",
        left: "1100px",
        stadium: "../static/assets/images/stadium/mlb/nationals.webp",
      },
      {
        src: "../static/assets/images/mlb/orioles.png",
        top: "240px",
        left: "1100px",
        stadium: "../static/assets/images/stadium/mlb/orioles.jpeg",
      },
      {
        src: "../static/assets/images/mlb/padres.png",
        top: "345px",
        left: "500px",
        stadium: "../static/assets/images/stadium/mlb/padres.jpeg",
        size: "30px",
      },
      {
        src: "../static/assets/images/mlb/phillies.png",
        top: "205px",
        left: "1100px",
        stadium: "../static/assets/images/stadium/mlb/phillies.jpeg",
      },
      {
        src: "../static/assets/images/mlb/pirates.png",
        top: "235px",
        left: "1065px",
        stadium: "../static/assets/images/stadium/mlb/mlb20.jpeg",
        size: "30px",
      },
      {
        src: "../static/assets/images/mlb/rangers.png",
        top: "360px",
        left: "800px",
        stadium: "../static/assets/images/stadium/mlb/rangers.webp",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/rays.png",
        top: "450px",
        left: "1050px",
        stadium: "../static/assets/images/stadium/mlb/rays.webp",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/reds.png",
        top: "280px",
        left: "1000px",
        stadium: "../static/assets/images/stadium/mlb/reds.jpeg",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/redsox.png",
        top: "110px",
        left: "1170px",
        stadium: "../static/assets/images/stadium/mlb/redsox.webp",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/rockies.png",
        top: "220px",
        left: "720px",
        stadium: "../static/assets/images/stadium/mlb/rockies.jpg",
      },
      {
        src: "../static/assets/images/mlb/royals.png",
        top: "260px",
        left: "870px",
        stadium: "../static/assets/images/stadium/mlb/royals.jpeg",
        size: "35px",
      },
      {
        src: "../static/assets/images/mlb/tigers.png",
        top: "160px",
        left: "1000px",
        stadium: "../static/assets/images/stadium/mlb/tigers.jpeg",
        size: "35px",
      },
      {
        src: "../static/assets/images/mlb/twins.png",
        top: "140px",
        left: "860px",
        stadium: "../static/assets/images/stadium/mlb/twins.jpeg",
      },
      {
        src: "../static/assets/images/mlb/whitesox.png",
        top: "210px",
        left: "960px",
        stadium: "../static/assets/images/stadium/mlb/whitesox.jpeg",
        size: "40px",
      },
      {
        src: "../static/assets/images/mlb/yankees.png",
        top: "165px",
        left: "1130px",
        stadium: "../static/assets/images/stadium/mlb/yankees.webp",
      },
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
        stadium: "../static/assets/images/stadium/kbo/hanhwa.png",
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
        src: "../static/assets/images/npb/baystars.png",
        top: "620px",
        left: "500px",
        stadium: "../static/assets/images/stadium/npb/baystars.webp",
        size: "60px",
      },
      {
        src: "../static/assets/images/npb/buffaloes.png",
        top: "700px",
        left: "350px",
        stadium: "../static/assets/images/stadium/npb/buffaloes.jpeg",
        size: "60px",
      },
      {
        src: "../static/assets/images/npb/dragons.png",
        top: "650px",
        left: "400px",
        stadium: "../static/assets/images/stadium/npb/dragons.webp",
        size: "60px",
      },
      {
        src: "../static/assets/images/npb/eagles.png",
        top: "450px",
        left: "590px",
        stadium: "../static/assets/images/stadium/npb/eagles.jpeg",
        size: "60px",
      },
      {
        src: "../static/assets/images/npb/fighters.png",
        top: "170px",
        left: "600px",
        stadium: "../static/assets/images/stadium/npb/fighters.jpeg",
        size: "60px",
      },
      {
        src: "../static/assets/images/npb/giants.png",
        top: "540px",
        left: "550px",
        stadium: "../static/assets/images/stadium/npb/giants.png",
        size: "50px",
      },
      {
        src: "../static/assets/images/npb/hawks.png",
        top: "710px",
        left: "80px",
        stadium: "../static/assets/images/stadium/npb/hawks.webp",
        size: "60px",
      },
      {
        src: "../static/assets/images/npb/lions.png",
        top: "540px",
        left: "500px",
        stadium: "../static/assets/images/stadium/npb/lions.jpeg",
        size: "50px",
      },
      {
        src: "../static/assets/images/npb/marines.png",
        top: "590px",
        left: "550px",
        stadium: "../static/assets/images/stadium/npb/marines.jpeg",
        size: "50px",
      },
      {
        src: "../static/assets/images/npb/swallows.png",
        top: "580px",
        left: "470px",
        stadium: "../static/assets/images/stadium/npb/swallows.jpeg",
        size: "50px",
      },
      {
        src: "../static/assets/images/npb/tigers.png",
        top: "650px",
        left: "300px",
        stadium: "../static/assets/images/stadium/npb/tigers.jpg",
        size: "55px",
      },
      {
        src: "../static/assets/images/npb/toyocarp.png",
        top: "670px",
        left: "180px",
        stadium: "../static/assets/images/stadium/npb/toyocarp.jpg",
        size: "55px",
      },
    ],
  };

  if (leagueName) {
    switch (leagueName.toLowerCase()) {
      case "mlb":
        leagueImage.src = "../static/assets/images/league/mlb.jpeg";
        leagueImage.style.width = "880px";
        leagueImage.style.marginLeft = "380px";
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

  function addVictoryButton(teamImage, container) {
    const victoryBtn = document.createElement("button");
    victoryBtn.innerText = "승리";
    victoryBtn.className = "victory-btn";
    victoryBtn.style.width = "100px";
    victoryBtn.style.height = "50px";
    victoryBtn.style.fontSize = "30px";
    victoryBtn.style.fontWeight = "bold";
    victoryBtn.style.backgroundColor = "#999";
    victoryBtn.style.color = "black";
    victoryBtn.style.border = "none";
    victoryBtn.style.borderRadius = "30px";

    // 엠블럼 중앙에 위치하게 설정
    victoryBtn.style.top = "50%";
    victoryBtn.style.left = "50%";
    victoryBtn.style.transform = "translate(-50%, -50%)";

    victoryBtn.addEventListener("click", function () {
      const gameInfo = document.querySelector(".gameInfo");
      gameInfo.innerHTML = ""; // gameInfo 안의 모든 요소 제거

      const clonedImage = teamImage.cloneNode(); // 엠블럼 이미지 복사
      clonedImage.style.transition = "transform 1s ease, width 1s ease";
      clonedImage.style.width = "420px"; // 엠블럼 너비 설정
      clonedImage.style.marginTop = "80px";
      clonedImage.style.position = "absolute";
      clonedImage.style.top = "50%";
      clonedImage.style.left = "50%";
      clonedImage.style.transform = "translate(-50%, -50%) scale(0)"; // 초기 scale 0

      gameInfo.appendChild(clonedImage); // gameInfo에 복사된 엠블럼 이미지 추가

      // 동그라미 요소 생성
      const circle = document.createElement("div");
      circle.style.width = "200px";
      circle.style.height = "200px";
      circle.style.borderRadius = "50%";
      circle.style.backgroundColor = "red"; // 원의 배경색
      circle.style.position = "absolute";
      circle.style.top = "calc(50% - 300px)"; // 엠블럼의 왼쪽 위에 위치하도록 조정
      circle.style.left = "calc(50% - 300px)"; // 엠블럼의 왼쪽 위에 위치하도록 조정

      const label = document.createElement("div");
      label.innerText = "역배";
      label.style.color = "white";
      label.style.position = "absolute";
      label.style.width = "100%";
      label.style.textAlign = "center";
      label.style.top = "50%";
      label.style.left = "50%";
      label.style.transform = "translate(-50%, -50%) rotate(-15deg)";
      label.style.color = "white";
      label.style.fontSize = "80px";
      label.style.fontWeight = "bold";

      circle.appendChild(label);
      gameInfo.appendChild(circle); // gameInfo에 동그라미 추가

      // 0ms delay to ensure the above styles are applied before starting the transition
      requestAnimationFrame(() => {
        clonedImage.style.transform = "translate(-50%, -50%) scale(1)"; // 최종 scale 1
      });
    });

    container.appendChild(victoryBtn);
  }

  function addEmblems(emblems) {
    emblemsContainer.innerHTML = ""; // 기존 엠블럼 제거
    emblems.forEach((emblem) => {
      const emblemElement = document.createElement("img");
      emblemElement.src = emblem.src;
      emblemElement.className = "emblem";
      emblemElement.style.position = "absolute";
      emblemElement.style.width = emblem.size || "45px"; // 기본 크기 45px, 지정된 크기 사용
      emblemElement.style.top = emblem.top;
      emblemElement.style.left = emblem.left;
      emblemElement.dataset.src = emblem.src;
      emblemElement.dataset.stadium = emblem.stadium;
      emblemElement.addEventListener("click", function () {
        const emblemRect = emblemElement.getBoundingClientRect();
        const homeTeamImageRect = homeTeamImage.getBoundingClientRect();
        const awayTeamImageRect = awayTeamImage.getBoundingClientRect();
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
          awayTeamImage.style.transition = "none"; // 애니메이션 초기화
          awayTeamImage.style.transformOrigin = `${
            emblemRect.left - awayTeamImageRect.left + emblemRect.width / 2
          }px ${
            emblemRect.top - awayTeamImageRect.top + emblemRect.height / 2
          }px`;
          awayTeamImage.style.transform = `scale(${1 / scaleX}, ${1 / scaleY})`;
          awayTeamImage.offsetHeight; // 레이아웃 트리거
          awayTeamImage.style.transition = "transform 1s ease";
          awayTeamImage.style.transform = "scale(1, 1)";

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
    homeTeamName.style.color = "#bbb"; // 클릭한걸 알 수 있게 색 변경
    awayTeamName.style.color = ""; // AWAY 색상 초기화
  });

  awayTeamName.addEventListener("click", function () {
    awayTeamSelected = true;
    homeTeamSelected = false; // HOME 선택 해제
    awayTeamName.style.color = "#bbb"; // 클릭한걸 알 수 있게 색 변경
    homeTeamName.style.color = ""; // HOME 색상 초기화
  });

  addVictoryButton(homeTeamImage, homeTeamContainer);
  addVictoryButton(awayTeamImage, awayTeamContainer);
});
