import React from "react";
import { Routes, Route } from "react-router-dom";
import League from "./League.jsx";
import Leagues from "./Leagues.jsx";
import { useState, useEffect } from "react";
import { getLeagues } from "../services/leagues.js";


export default function Home() {
  
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      const allLeagues = await getLeagues();
      setLeagues(allLeagues);
    };

    fetchLeagues();
  }, []);

  if (!leagues) return "...loading";
  return (
    <div>
      <Routes>
        <Route path="/" element={<Leagues leaguesData={leagues} />} />
        <Route path="/Spain" element={<League leaguesData={leagues[0]} />} />
        <Route path="/England" element={<League leaguesData={leagues[1]} />} />
        <Route path="/Portugal" element={<League leaguesData={leagues[2]} />} />
        <Route path="/Italy" element={<League leaguesData={leagues[3]} />} />
        <Route path="/France" element={<League leaguesData={leagues[4]} />} />
      </Routes>
    </div>
  );
}
