import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" p-2 bg-black text-yellow-300 ">
      <div className="h-[10vh] flex items-center justify-between mx-8">
        <span className="text-center text-sm">
          Hecho por Henrys para Henrys
        </span>
        <a href="https://www.soyhenry.com/" className="flex" target={"_blank"}>
          <img
            src="https://assets.soyhenry.com/LOGO-REDES-01_og.jpg"
            className="mr-3 h-8 rounded-md"
            alt="Henry"
          />
          <span className="text-2xl font-semibold text-white">Henry</span>
        </a>
        <div className="flex text-sm space-x-10">
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
