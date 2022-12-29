import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Profile() {
  const { nombre } = useParams();
  return (
    <div>
      <Navbar />
      <div className="w-full bg-slate-200 h-[100vh]">
        <div className="m-10 border-2 border-black h-[80%] rounded-xl">
          <div className="border-b-2 border-black h-32 flex items-center space-x-8">
            <img
              className="h-[100px] w-[100px] rounded-xl m-6 border-2 border-black"
              alt="userphoto"
              // src={picture}
            />
            <div className="flex">
              <div className="flex ">
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
              <h3 className="text-xl ml-32  font-semibold">LOCALIDAD:</h3>
              <p>Mar del Plata</p>
            </div>

            <div className="flex m-4 items-center justify-center">
              <label className="text-xl ml-32 font-semibold">Imagen:</label>
            </div>
            <div className="flex m-4 items-center justify-center">
              <h2>SOBRE {nombre.toUpperCase()}</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
