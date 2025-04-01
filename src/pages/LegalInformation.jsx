import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LegalInformation() {
  return (
    <div className="">
      <Navbar />
      <div className="grid grid-flow-row h-screen">
        <div className="flex justify-center items-center bg-slate-200">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold pb-4">INFORMACION LEGAL</h1>
            <p className="text-2xl font-normal leading-9">
              La aplicación DevHouse es un proyecto desarrollado por estudiantes para participar de un Hackathon.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LegalInformation;
