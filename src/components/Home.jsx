import React from "react";
import IndexMap from "./IndexMap";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-between bg-slate-100">
        <div>
          <div className="flex flex-col justify-center w-full h-screen ">
            <p class="mb-4 font-extrabold tracking-tight leading-none md:text-5xl lg:text-3xl text-black">
              USUARIOS REGISTRADOS: <span class="text-yellow-300 ">100</span>
            </p>
            <p class="mb-4 font-extrabold tracking-tight leading-non md:text-5xl lg:text-3xl text-black">
              POSTEOS UNICOS: <span class="text-yellow-300  ">100</span>
            </p>
            <p class="font-extrabold tracking-tight leading-none md:text-5xl lg:text-3xl text-black">
              ENCUENTROS EXITOSOS: <span class="text-yellow-300  ">100</span>
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
