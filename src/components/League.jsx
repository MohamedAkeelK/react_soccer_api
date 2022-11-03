import React from "react";

export default function League({ leaguesData }) {
  if (!leaguesData) {
    return "loading"
  }

  let name = leaguesData.leagueName;

  const standingsData = leaguesData.standings.map((val, i) => {
    if (!val) {
      return "";
    } else {
      // console.log(val)
             return (
          <tr key={i}>
            <td>{val.Position}</td>
            <td><img src={val.SquadLogo} alt={val.Name} /></td>
            <td>{val.Name}</td>
            <td>{val.Points}</td>
            <td>{val.Played}</td>
            <td>{val.Winned}</td>
            <td>{val.Loosed}</td>
            <td>{val.Tie}</td>
            <td>{val["Goal Difference"]}</td>
          </tr>
        );
    }
  });

  return (
    <div className="table-ctr">
      <h1 className="leagueName">{name}</h1>
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
        <tbody>{standingsData}</tbody>
      </table>
    </div>
  );
}
