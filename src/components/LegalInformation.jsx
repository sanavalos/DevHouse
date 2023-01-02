import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function LegalInformation() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center h-[calc(100%_-_10.5rem)] bg-slate-200">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold pb-4">INFORMACION LEGAL</h1>
          <p className="text-2xl font-normal leading-9">
            La aplicacion HenryHouse es un proyecto desarrollado por estudiantes
            y no tiene asociacion alguna con la empresa Henry.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default LegalInformation;
