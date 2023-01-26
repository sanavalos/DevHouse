import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import Forum from "./pages/Forum";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Forget from "./pages/Forget";
import AuthContextProvider from "./context/AuthContext";
import AboutUs from "./pages/AboutUs";
import LegalInformation from "./pages/LegalInformation";
import Post from "./pages/Post";
import Contact from "./pages/Contact";
import Protected from "./Protected";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/inicio" element={<Home />} />
          <Route exact path="/foro" element={<Forum />} />
          <Route
            exact
            path="/cuenta"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route exact path="/conectarse" element={<Login />} />
          <Route exact path="/crearcuenta" element={<CreateAccount />} />
          <Route exact path="/olvido" element={<Forget />} />
          <Route exact path="/perfil/:id" element={<Profile />} />
          <Route exact path="/nosotros" element={<AboutUs />} />
          <Route exact path="/informacion" element={<LegalInformation />} />
          <Route exact path="/posteo" element={<Post />} />
          <Route exact path="/contacto" element={<Contact />} />
          <Route exact path="/*" element={<PageNotFound />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
