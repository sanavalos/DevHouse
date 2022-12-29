import React from "react";
import IndexMap from "./IndexMap";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-between bg-slate-200">
        <div className="ml-[5%]">
          <div className="flex flex-col justify-center w-full h-screen">
            <p className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-black">
              USUARIOS REGISTRADOS:{" "}
              <span className="text-yellow-300 ">100</span>
            </p>
            <p className="mb-4 text-2xl font-extrabold tracking-tight leading-non md:text-3xl lg:text-4xl text-black">
              POSTEOS UNICOS: <span className="text-yellow-300  ">100</span>
            </p>
            <p className="text-2xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-black">
              ENCUENTROS EXITOSOS:{" "}
              <span className="text-yellow-300  ">100</span>
            </p>
            <div className="flex flex-col text-center mt-10">
              <p className=" text-xl font-semibold text-gray-900">
                BUSCA TU PROXIMA HenryHouse
              </p>
            </div>
          </div>
        </div>
        <IndexMap />
      </div>
      <Footer />
    </>
  );
}

export default Home;
