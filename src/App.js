// import { useState, useEffect } from "react";
// import { getLeagues } from "./services/leagues.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import NAV from "./components/NAV.jsx";
// import League from "./components/League.jsx";

function App() {
  return (
    <div className="App">
      <NAV />
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route path="/Spain" element={<League leaguesData={leagues[0]} />} />
        <Route path="/England" element={<League leaguesData={leagues[1]} />} />
        <Route path="/Portugal" element={<League leaguesData={leagues[2]} />} />
        <Route path="/Italy" element={<League leaguesData={leagues[3]} />} />
        <Route path="/France" element={<League leaguesData={leagues[4]} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
