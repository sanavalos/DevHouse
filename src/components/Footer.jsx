import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="p-4 bg-black shadow md:px-6 md:py-5 ">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
          <img
            src="https://assets.soyhenry.com/LOGO-REDES-01_og.jpg"
            class="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            HenryHouse
          </span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
          <li>
            <Link to={"/nosotros"} class="mr-4 hover:underline md:mr-6">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to={"/informacion"} class="mr-4 hover:underline md:mr-6">
              Información Legal
            </Link>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
      <span class="text-center block text-sm text-gray-500  dark:text-gray-400">
        Hecho por Henrys para Henrys
      </span>
    </footer>
  );
}

export default Footer;
