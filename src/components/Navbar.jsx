import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

function Navbar() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "¡Nos vemos luego!",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="bg-black text-yellow-300 flex justify-between items-center h-[8vh] fixed top-0 left-0 z-10 w-full">
      <div>
      <Link to="/inicio" className="flex flex-row items-center">
        <img
          src="https://assets.soyhenry.com/LOGO-REDES-01_og.jpg"
          alt="logo"
          className="md:w-14 md:h-10 w-7 h-7 ml-1 border-b-2 border-black md:ml-10"
        />
        <h1 className="md:text-2xl md:ml-2 ml-1 font-extrabold tracking-tight hover:scale-110 text-[#FFFF01]">
          HenryHouse
        </h1>
      </Link>
      </div>
      <div className="space-x-4 mr-4 text-sm md:text-lg md:space-x-10 md:mr-10">
        <Link to="/inicio">
          <button className="hover:text-red-500 hover:scale-110">Mapa</button>
        </Link>
        <Link to="/foro">
          <button className="hover:text-red-500 hover:scale-110">Foros</button>
        </Link>
        <Link to="/conectarse">
          <button className="hover:text-red-500 hover:scale-110">
            {user?.uid ? "Perfil" : "Iniciar Sesion"}
          </button>
        </Link>
        <Link to="/">
          <button
            className="hover:text-red-500 hover:scale-110"
            onClick={handleLogout}
          >
            {user?.uid && location.pathname !== "/cuenta" ? "Desloguea" : ""}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
