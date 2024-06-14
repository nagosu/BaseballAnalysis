document.addEventListener("DOMContentLoaded", function () {
  function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const leagueName = getParameterByName("league");
  const leagueImage = document.getElementById("leagueImage");

  if (leagueName) {
    switch (leagueName.toLowerCase()) {
      case "mlb":
        leagueImage.src = "../static/assets/images/league/mlb.jpeg";
        break;
      case "kbo":
        leagueImage.src = "../static/assets/images/league/kbo.png";
        break;
      case "npb":
        leagueImage.src = "../static/assets/images/league/npb.jpeg";
        break;
      default:
        leagueImage.alt = "League image not found";
    }
  } else {
    leagueImage.alt = "No league specified";
  }
});
