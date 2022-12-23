import Landing from "./components/Landing";
import Home from "./components/Home";
import Country from "./components/Country";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">HenryHouse</h1>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/foro/:pais" element={<Country />} />
        <Route exact path="/perfil/:nombre" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
