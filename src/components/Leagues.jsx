import React from "react";

export default function Leagues({ leaguesData }) {
  for (let i = 0; i < 5; i++) {
    if (!leaguesData[i] || !leaguesData) return "...loading";
  }

  const mydata = leaguesData.map((val, i) => {
    if (!val) {
      return "";
    } else {
      // console.log(val.country)
      return val.standings.map((standing, i) => {
        // console.log(standing)
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
    <div className="table-ctr">
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Points</th>
            <th>Played</th>
            <th>Win</th>
            <th>Loss</th>
            <th>Tie</th>
            <th>GD</th>
          </tr>
        </thead>
        <tbody>{mydata}</tbody>
      </table>
    </div>
  );
}
