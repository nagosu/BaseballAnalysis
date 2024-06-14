document.addEventListener("DOMContentLoaded", function () {
  const leagueLinks = document.querySelectorAll(".leagueCol");

  leagueLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // 기본 동작 방지

      const leagueTitle = this.getAttribute("data-league");
      const url = new URL(this.href);
      url.searchParams.append("league", leagueTitle);

      window.location.href = url;
    });
  });
});
