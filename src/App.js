import NAV from "./components/NAV.jsx";
import { useState, useEffect } from "react";
import { getLeagues } from "./services/leagues.js";

// import Home from "./screens/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Spain from "./components/Spain.jsx";

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
        <Route path="/Spain" element={<Spain leaguesData={leagues[0]} />} />
        <Route path="/England" element={<Spain leaguesData={leagues[1]} />} />
        <Route path="/Portugal" element={<Spain leaguesData={leagues[2]} />} />
        <Route path="/Italy" element={<Spain leaguesData={leagues[3]} />} />
        <Route path="/France" element={<Spain leaguesData={leagues[4]} />} />
      </Routes>
    </div>
  );
}

export default App;
