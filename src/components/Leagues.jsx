import React from "react";

export default function Leagues({ leaguesData }) {
  for (let i = 0; i < 5; i++) {
    if (!leaguesData[i] || !leaguesData) return "...loading";
  }

  const mydata = leaguesData.map((val, i) => {
    if (!val) {
      return "";
    } else {
      return (
        <tr key={i}>
          <td>{val.leagueName}</td>
          <td>{val.country}</td>
          <td>See standings</td>
        </tr>
      );
    }
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>League</th>
            <th>Country</th>
            <th>Standings</th>
          </tr>
        </thead>
        <tbody>
          {mydata}
        </tbody>
      </table>
    </div>
  );
}
