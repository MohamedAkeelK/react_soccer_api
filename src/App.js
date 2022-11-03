import { useState, useEffect } from "react";
import { getLeagues } from "./services/leagues.js";
import { Routes, Route } from "react-router-dom";
import NAV from "./components/NAV.jsx";
import League from "./components/League.jsx";

function App() {
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
    <div className="App">
      <NAV />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Spain" element={<League leaguesData={leagues[0]} />} />
        <Route path="/England" element={<League leaguesData={leagues[1]} />} />
        <Route path="/Portugal" element={<League leaguesData={leagues[2]} />} />
        <Route path="/Italy" element={<League leaguesData={leagues[3]} />} />
        <Route path="/France" element={<League leaguesData={leagues[4]} />} />
      </Routes>
    </div>
  );
}

export default App;
