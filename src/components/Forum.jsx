import React, { useState } from "react";
import Navbar from "./Navbar";
// import { useLocation } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { BsFilePostFill } from "react-icons/bs";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
function Forum() {
  // let location = useLocation();
  const [search, setSearch] = useState(null);

  const countries = [
    "Colombia",
    "Argentina",
    "Chile",
    "España",
    "Mexico",
    "Guatemala",
    "Perú",
    "Uruguay",
    "Bolivia",
    "Venezuela",
    "Paraguay",
    "Ecuador",
    "Panama",
    "Costa Rica",
    "Cuba",
    "Rep. Dominicana",
    "Honduras",
    "El Salvador",
  ];
  return (
    <>
      {/* {location.pathname !== "/home" && <Navbar />} */}
      <Navbar />

      <div className="flex">
        <div className="flex flex-col h-screen p-3 bg-white shadow w-[16.5rem]">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Menu del Foro</h2>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center py-4">
                <button
                  type="submit"
                  className="p-2 focus:outline-none focus:ring"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </span>

              <input
                type="text"
                placeholder="Pais, Usuario o Titulo"
                className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <BiWorld size={40} />
                    <label
                      for="countries"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Paises
                    </label>

                    <select
                      className="bg-gray-300 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-yellow-300 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => setSearch(e.target.value)}
                    >
                      {countries.map((country) => (
                        <option value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </li>
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <BsFilePostFill size={20} />
                    <span>Ultimos posteos</span>
                  </div>
                </li>
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <MdOutlineLocalFireDepartment size={25} />
                    <span>Posteos mas vistos</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
            <button ><a href="/posteo">Crea un post</a></button>
        </div>

        <div className="container mx-auto mt-12">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
            POSTEOS {search ? "EN" : ""}
            <span className="text-yellow-300 dark:text-yellow-300 ">
              {search ? " " + search.toUpperCase() : "GENERALES"}
            </span>
            .
          </h1>

          <div className="flex flex-col">
            <div className="max-w-fit px-4 py-5 bg-white rounded-lg shadow mb-7">
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                ¿Cual es el valor de cambio de Peso Argentino a Dolar?
              </div>
              <div className="text-sm font-medium text-gray-500 truncate">
                26/12/2020 12:00 AM - Santiago
              </div>
              <div className="text-md font-medium text-gray-500 truncate">
                Hola amigos, soy de Chile y no entiendo muy bien el valor de
                cambio de Peso Argentino a Dolar. ¿Alguien me podria explicar?
                gracias.
              </div>
            </div>
            <div className="max-w-fit px-4 py-5 bg-white rounded-lg shadow mb-7">
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                ¿Que metodo usan para viajar en transporte publico?
              </div>
              <div className="text-sm font-medium text-gray-500 truncate">
                26/12/2020 12:00 AM - Santiago
              </div>
              <div className="text-md font-medium text-gray-500 truncate">
                Como andan? Escuche que en Argentina los viajes en colectivo no
                se puede pagar con efectivo, solo con tarjeta. Es cierto? Que
                metodo usan para viajar en transporte publico?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forum;
