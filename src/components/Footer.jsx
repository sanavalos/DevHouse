import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-2 bg-black text-yellow-300">
      <div className="h-[8vh] flex items-center justify-between mx-8">
        <span className="text-center text-sm">
          Hecho por Henrys para Henrys
        </span>
        <a href="https://www.soyhenry.com/" className="flex" target={"_blank"}>
          <img
            src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png"
            className="mr-3 h-8"
            alt="Henry"
          />
        </a>
        <div className="flex text-sm space-x-10">
          <Link to="/contacto">
            <button className="hover:text-red-500 hover:scale-110">
              Contactanos
            </button>
          </Link>
          <Link to="/nosotros">
            <button className="hover:text-red-500 hover:scale-110">
              Sobre Nosotros
            </button>
          </Link>
          <Link to="/informacion">
            <button className="hover:text-red-500 hover:scale-110">
              Información Legal
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
