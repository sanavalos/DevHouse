import Landing from "./components/Landing";
import Home from "./components/Home";
import Country from "./components/Country";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";
import Forum from "./components/Forum";
import Account from "./components/Account";
import PageNotFound from "./components/PageNotFound";
import AboutUs from "./components/AboutUs";
import LegalInformation from "./components/LegalInformation";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/foro" element={<Forum />} />
        <Route exact path="/cuenta" element={<Account />} />
        <Route exact path="/foro/:pais" element={<Country />} />
        <Route exact path="/perfil/:nombre" element={<Profile />} />
        <Route exact path="/nosotros" element={<AboutUs />} />
        <Route exact path="/informacion" element={<LegalInformation />} />
        <Route exact path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
