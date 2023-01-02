import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function AboutUs() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center h-[calc(100%_-_10.5rem)] bg-slate-200">
        <div className="flex flex-col gap-8">
          <div className="w-full flex flex-col mt-20">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-black text-center">
              SOBRE NOSOTROS
            </h1>
            <p className="text-lg leading-6 text-gray-600 ">
              Desarrolladores unidos por una pasion y un bootcamp. Motivados por
              el deseo de aumentar la conexion entre todos aquellos que formen
              parte de la comunidad Soy Henry.
            </p>
          </div>
          <div className="w-full">
            <div className="flex justify-center shadow-lg rounded-lg bg-yellow-300 m-4">
              <div className="flex justify-center flex-col items-center m-4">
                <img
                  className="h-[350px] w-[300px] rounded-lg border-2 border-black mt-4"
                  src='https://avatars.githubusercontent.com/u/92122729?v=4'
                  alt="Mario Img"
                />
                <div className="flex items-center mt-3">
                  <p className="text-2xl leading-5 text-gray-800 font-bold">
                    Mario Franco
                  </p>
                </div>
                <div className="flex items-center space-x-6 my-4">
                <a href='https://github.com/MKamui' target={"_blank"}><BsGithub size={30} className="hover:scale-125"/></a>
                <a href='https://www.linkedin.com/in/mario-franco-427904178/' target={"_blank"}><BsLinkedin size={30} className="hover:scale-125"/></a>
                </div>
              </div>
              <div className="flex justify-center flex-col items-center m-4">
                <img
                  className="h-[350px] w-[300px] rounded-lg border-2 border-black mt-4"
                  src='https://avatars.githubusercontent.com/u/89056369?v=4'
                  alt="Santi Img"
                />
                <div className="flex items-center mt-3">
                  <p className="text-2xl leading-5 text-gray-800 font-bold">
                    Santiago Avalos
                  </p>
                </div>
                <div className="flex items-center space-x-6 my-4">
                <a href='https://github.com/sanavalos' target={"_blank"}><BsGithub size={30} className="hover:scale-125"/></a>
                <a href='https://www.linkedin.com/in/santiagoavalos/' target={"_blank"}><BsLinkedin size={30} className="hover:scale-125"/></a>
                </div>
              </div>
              <div className="flex justify-center flex-col items-center m-4">
                <img
                  className="h-[350px] w-[300px] rounded-lg border-2 border-black mt-4"
                  src='https://avatars.githubusercontent.com/u/97192959?v=4'
                  alt="Fer Img"
                />
                <div className="flex items-center mt-3">
                  <p className="text-2xl leading-5 text-gray-800 font-bold">
                    Fernando Bernal
                  </p>
                </div>
                <div className="flex items-center space-x-6 my-4">
                <a href='https://github.com/Fernando-Bernal' target={"_blank"}><BsGithub size={30} className="hover:scale-125"/></a>
                <a href='https://www.linkedin.com/in/fernando-bernal-dev/' target={"_blank"}><BsLinkedin size={30} className="hover:scale-125"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
