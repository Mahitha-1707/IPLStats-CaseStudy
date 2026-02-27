const teams = [
  { name: "Chennai Super Kings", captain: "MS Dhoni", ground: "Chennai", wins: 5 },
  { name: "Mumbai Indians", captain: "Rohit Sharma", ground: "Mumbai", wins: 5 },
  { name: "Royal Challengers Bangalore", captain: "Virat Kohli", ground: "Bangalore", wins: 1},
  { name: "Kolkata Knight Riders", captain: "Shreyas Iyer", ground: "Kolkata", wins: 3 },
  { name: "Sunrisers Hyderabad", captain: "Pat Cummins", ground: "Hyderabad", wins: 1 },
  { name: "Rajasthan Royals", captain: "Sanju Samson", ground: "Jaipur", wins: 1 },
  { name: "Delhi Capitals", captain: "Rishabh Pant", ground: "Delhi", wins: 0 },
  { name: "Punjab Kings", captain: "Shikhar Dhawan", ground: "Mohali", wins: 0 },
  { name: "Lucknow Super Giants", captain: "KL Rahul", ground: "Lucknow", wins: 0 },
  { name: "Gujarat Titans", captain: "Hardik Pandya", ground: "Ahmedabad", wins: 1 }
];

const container = document.getElementById("teamsContainer");

function displayTeams(list) {
  container.innerHTML = "";
  list.forEach(team => {
    container.innerHTML += `
      <div class="team-card">
        <h3>${team.name}</h3>
        <p><b>Captain:</b> ${team.captain}</p>
        <p><b>Home Ground:</b> ${team.ground}</p>
        <p><b>Titles:</b> ${team.wins}</p>
      </div>
    `;
  });
}

function searchTeam() {
  const value = document.getElementById("searchTeam").value.toLowerCase();
  const filtered = teams.filter(team =>
    team.name.toLowerCase().includes(value)
  );
  displayTeams(filtered);
}

displayTeams(teams);
