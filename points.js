// BASIC IPL POINTS TABLE DATA
const pointsTable = [
  { team: "Chennai Super Kings", matches: 14, wins: 9, losses: 5 },
  { team: "Mumbai Indians", matches: 14, wins: 8, losses: 6 },
  { team: "Delhi Capitals", matches: 14, wins: 7, losses: 7 },
  { team: "Kolkata Knight Riders", matches: 14, wins: 7, losses: 7 },
  { team: "Sunrisers Hyderabad", matches: 14, wins: 6, losses: 8 }
];

// CALCULATE POINTS (2 points per win)
pointsTable.forEach(team => {
  team.points = team.wins * 2;
});

// SORT BY POINTS (DESCENDING)
pointsTable.sort((a, b) => b.points - a.points);

// DISPLAY TABLE
const tableBody = document.getElementById("pointsBody");

pointsTable.forEach((team, index) => {
  const row = document.createElement("tr");

  // HIGHLIGHT TOP 4 TEAMS
  if (index < 4) {
    row.style.backgroundColor = "#d1e7ff";
  }

  row.innerHTML = `
    <td>${team.team}</td>
    <td>${team.matches}</td>
    <td>${team.wins}</td>
    <td>${team.losses}</td>
    <td>${team.points}</td>
  `;

  tableBody.appendChild(row);
});
