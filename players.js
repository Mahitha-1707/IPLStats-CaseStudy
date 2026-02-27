const squads = [
  {
    team: "Chennai Super Kings",
    batters: [
      { name: "Ruturaj Gaikwad", role: "Batter", age: "28y" },
      { name: "MS Dhoni", role: "Wicketkeeper Batter", age: "44y" }
    ],
    allrounders: [
      { name: "Shivam Dube", role: "Allrounder" }
    ],
    bowlers: [
      { name: "Khaleel Ahmed", role: "Bowler" }
    ]
  },
  {
    team: "Delhi Capitals",
    batters: [
      { name: "KL Rahul", role: "Wicketkeeper Batter" },
      { name: "David Miller", role: "Middle order Batter" }
    ],
    allrounders: [
      { name: "Axar Patel", role: "Allrounder" }
    ],
    bowlers: [
      { name: "Mitchell Starc", role: "Bowler" }
    ]
  }
  // ➕ ADD OTHER TEAMS USING SAME FORMAT
];

const container = document.getElementById("squads");

squads.forEach(team => {
  container.innerHTML += `
    <div class="team-card">
      <h3>${team.team}</h3>
      <p><b>Batters:</b> ${team.batters.map(p => p.name).join(", ")}</p>
      <p><b>Allrounders:</b> ${team.allrounders.map(p => p.name).join(", ")}</p>
      <p><b>Bowlers:</b> ${team.bowlers.map(p => p.name).join(", ")}</p>
    </div>
  `;
});
