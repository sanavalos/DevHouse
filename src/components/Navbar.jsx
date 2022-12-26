import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black absolute w-[100%] text-yellow-300 flex relative items-center">
      <img
        src="https://assets.soyhenry.com/LOGO-REDES-01_og.jpg"
        alt="logo"
        className="w-14 h-10"
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
        <Link to="">
          <button className="hover:text-red-500 hover:scale-110">
            Mensajes
          </button>
        </Link>
        <Link to="/cuenta">
          <button className="hover:text-red-500 hover:scale-110">Perfil</button>
        </Link>
        <Link to="">
          <button className="hover:text-red-500 hover:scale-110">
            Desloguea
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
