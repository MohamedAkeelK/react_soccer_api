import NAV from "./components/NAV.jsx";
import Home from "./screens/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NAV />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Spain" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
