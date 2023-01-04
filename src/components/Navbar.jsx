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
    <div className="bg-black w-[100%] text-yellow-300 flex items-center h-[8vh] sticky top-0 z-10">
      <img
        src="https://assets.soyhenry.com/LOGO-REDES-01_og.jpg"
        alt="logo"
        className="w-14 h-10 border-b-2 border-black"
      />
      <Link to="/home">
        <h1 className="ml-4 text-xl hover:text-red-500 hover:scale-110">
          Henry House
        </h1>
      </Link>
      <div className="absolute right-10 space-x-10">
        <Link to="/foro">
          <button className="hover:text-red-500 hover:scale-110">Foros</button>
        </Link>
        <Link to="/login">
          <button className="hover:text-red-500 hover:scale-110">
            {user?.uid ? "Perfil" : "Iniciar Sesion"}
          </button>
        </Link>
        {user?.uid && location.pathname !== "/cuenta" && (
          <Link to="/">
            <button
              className="hover:text-red-500 hover:scale-110"
              onClick={handleLogout}
            >
              Desloguea
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
