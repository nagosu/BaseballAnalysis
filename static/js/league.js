document.addEventListener("DOMContentLoaded", function () {
  function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const leagueName = getParameterByName("league");
  if (leagueName) {
    document.getElementById("leagueName").textContent = leagueName;
  } else {
    document.getElementById("leagueName").textContent = "League not found";
  }
});
