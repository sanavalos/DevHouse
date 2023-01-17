import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function LegalInformation() {
  return (
    <div className="">
      <Navbar />
      <div className="grid grid-flow-row h-screen">
        <div className="flex justify-center bg-slate-200">
          <div className="mt-40 md:mt-80 lg:mt-96 text-center">
            <h1 className="text-4xl font-extrabold pb-4">INFORMACION LEGAL</h1>
            <p className="text-2xl font-normal leading-9">
              La aplicacion HenryHouse es un proyecto desarrollado por
              estudiantes y no tiene asociacion alguna con la empresa Henry.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LegalInformation;
