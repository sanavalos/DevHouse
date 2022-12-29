import Landing from "./components/Landing";
import Home from "./components/Home";
import Country from "./components/Country";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";
import Forum from "./components/Forum";
import Account from "./components/Account";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Forget from "./components/Forget";
import AuthContextProvider from './context/AuthContext';
import AboutUs from "./components/AboutUs";
import LegalInformation from "./components/LegalInformation";
import Post from "./components/Post";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/foro" element={<Forum />} />
          <Route exact path="/cuenta" element={<Account />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/crearcuenta" element={<CreateAccount />} />
          <Route exact path="/olvido" element={<Forget />} />
          <Route exact path="/foro/:pais" element={<Country />} />
          <Route exact path="/perfil/:nombre" element={<Profile />} />
          <Route exact path="/nosotros" element={<AboutUs />} />
        <Route exact path="/informacion" element={<LegalInformation />} />
        <Route exact path="/posteo" element={<Post />} />
        <Route exact path="/*" element={<PageNotFound />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
