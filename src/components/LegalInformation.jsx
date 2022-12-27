import React from "react";
import Navbar from "./Navbar";
function LegalInformation() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center mx-40 ">
          <h1 className="text-4xl font-bold pb-4">Informacion Legal</h1>
          <p className="text-2xl font-normal leading-9">
            La aplicacion HenryHouse es un proyecto desarrollado por estudiantes
            y no tiene asociacion alguna con la empresa Henry.
          </p>
        </div>
      </div>
    </>
  );
}

export default LegalInformation;
