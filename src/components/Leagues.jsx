import React from 'react'

export default function Leagues({ leaguesData }) {

  //  console.log(leaguesData, "here")
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
    <div>Leagues</div>
  )
}
