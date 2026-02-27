const matches = [
  { teams: "CSK vs MI", venue: "Chennai", status: "Upcoming" },
  { teams: "RCB vs KKR", venue: "Bangalore", status: "Completed" }
];

function filterMatches(team) {
  document.getElementById("matches").innerHTML =
    matches
      .filter(m => team === "all" || m.teams.includes(team))
      .map(m => `<p>${m.teams} - ${m.status}</p>`)
      .join("");
}

filterMatches("all");
