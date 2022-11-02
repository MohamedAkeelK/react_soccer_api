import React from "react";

export default function Leagues({ leaguesData }) {
  for (let i = 0; i < 5; i++) {
    if (!leaguesData[i] || !leaguesData) return "...loading";
  }

  const mydata = leaguesData.map((val, i) => {
    if (!val) {
      return "";
    } else {
      return val.standings.map((standing, i) => {
        console.log(standing)
        return (
          <tr key={i}>
            <td>{standing.Position}</td>
            <td><img src={standing.SquadLogo} /></td>
            <td>{standing.Name}</td>
            <td>{standing.Points}</td>
            <td>{standing.Played}</td>
            <td>{standing.Winned}</td>
            <td>{standing.Loosed}</td>
            <td>{standing.Tie}</td>
            <td>{standing["Goal Difference"]}</td>


          </tr>
        );
      });
    }
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Pts</th>
            <td>Ply</td>
            <th>W</th>
            <th>L</th>
            <th>T</th>
            <th>GD</th>
          </tr>
        </thead>
        <tbody>{mydata}</tbody>
      </table>
    </div>
  );
}
