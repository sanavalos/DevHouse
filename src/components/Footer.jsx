import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-2 bg-black text-yellow-300 relative bottom-0 left-0 z-10 w-full">
      <div className="h-[8vh] flex items-center md:justify-between md:px-8">
        <span className="text-center text-[9px] hidden md:block md:text-sm">
          Hecho por Devs para Devs
        </span>
        <a
          href="https://www.soyhenry.com/"
          className="flex mx-2"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png"
            className="md:h-8 h-6"
            alt="Henry"
          />
        </a>
        <div className="flex text-[10px] items-center gap-4 md:flex-row md:text-sm md:space-x-10">
          <Link to="/contacto">
            <button className="hover:scale-110 hover:font-bold">
              Contactanos
            </button>
          </Link>
          <Link to="/nosotros">
            <button className="hover:scale-110 hover:font-bold">
              Sobre Nosotros
            </button>
          </Link>
          <Link to="/informacion">
            <button className="hover:scale-110 hover:font-bold">
              Información Legal
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
