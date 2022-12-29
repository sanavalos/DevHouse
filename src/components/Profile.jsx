import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RiRadioButtonLine, RiTeamFill } from "react-icons/ri";
import { MdPlace } from "react-icons/md";
import { SiDiscord } from "react-icons/si";

function Profile() {
  const { nombre } = useParams();
  return (
    <div>
      <Navbar />
      <div className="place-items-center grid">
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-5 h-[80vh]">
          <img
            className="w-full h-56 object-cover object-center"
            src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
            alt="Liam"
          />
          <div className="flex items-center px-6 py-3 bg-gray-900">
            <RiRadioButtonLine className="h-6 w-6 text-green-500 fill-current" />

            <h1 className="mx-3 text-white font-semibold text-lg">En linea</h1>
          </div>
          <div className="py-4 px-6">
            <h1 className="text-3xl font-semibold text-gray-800">{nombre}</h1>
            <h1 className="text-l font-semibold text-gray-800">Argentina</h1>
            <p className="py-2 text-lg text-gray-700">
              Busco lugares en los que pueda trabajar cuando recorro distintos
              paises y ciudades
            </p>
            <div className="flex items-center mt-4 text-gray-700">
              <RiTeamFill className="h-6 w-6  fill-current" />
              <h1 className="px-2 text-sm">Team Full Stack</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
              <SiDiscord className="h-6 w-6  fill-current" />
              <h1 className="px-2 text-sm">#santi10</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
              <MdPlace className="h-6 w-6  fill-current" />
              <h1 className="px-2 text-sm">Mar del Plata</h1>
            </div>

            <div className="flex m-4 items-center justify-center">
              <ul className="flex flex-wrap">
                <li className="bg-black text-yellow-300 p-2 m-2 rounded-xl">
                  Programacion
                </li>
                <li className="bg-black text-yellow-300 p-2 m-2 rounded-xl">
                  Musica
                </li>
                <li className="bg-black text-yellow-300 p-2 m-2 rounded-xl">
                  Futbol
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full bg-slate-200 h-[90vh] place-items-center grid">
        <div className="m-10 border-2 border-black w-[60%] h-[80%] rounded-xl">
          <div className=" flex border-black h-32 items-center  space-x-8">
            <img
              className="h-[100px] w-[100px] rounded-xl m-6 border-2 border-black"
              alt="userphoto"
              // src={picture}
            />
            <div className="flex w-[80%] justify-between">
              <div className="flex w-full justify-around">
                <h2 className="text-3xl font-semibold">{nombre}</h2>
                <h2 className="text-3xl font-semibold">Argentina</h2>
              </div>
              <button className="p-2 bg-black text-yellow-300 text-2xl hover:scale-110 hover:text-red-500 rounded-xl">
                ENVIAR MENSAJE
              </button>
            </div>
          </div>
          <div className="border-t-2 border-black h-[80%] bg-red-300 rounded-b-xl border-b-2">
            <div className="flex m-4 items-center justify-center">
              <h3 className="text-xl  font-semibold">LOCALIDAD:</h3>
              <p>Mar del Plata</p>
            </div>

            <div className="flex m-4 items-center justify-center">
              <p>INTERESES:</p>
              <ul className="flex flex-wrap">
                <li className="bg-black text-yellow-300 p-2 m-2 rounded-xl">
                  Programacion
                </li>
                <li className="bg-black text-yellow-300 p-2 m-2 rounded-xl">
                  Musica
                </li>
                <li className="bg-black text-yellow-300 p-2 m-2 rounded-xl">
                  Futbol
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default Profile;
