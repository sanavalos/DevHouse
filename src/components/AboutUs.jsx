import React from "react";
import Navbar from "./Navbar";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Sobre Nosotros
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Desarrolladores unidos por una pasion y un bootcamp. Motivados por
              el deseo de aumentar la conexion entre todos aquellos que formen
              parte de la comunidad Soy Henry.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Alexa featured Img"
                />
                <div className="flex items-center mt-3">
                  <p className="font-medium text-xl leading-5 text-gray-800 ">
                    Alexa
                  </p>
                </div>
                <div className="flex items-center mt-1">
                  <BsLinkedin />
                  <BsGithub />
                </div>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <div className="flex items-center mt-3">
                  <p className="font-medium text-xl leading-5 text-gray-800 ">
                    Olivia
                  </p>
                </div>
                <div className="flex items-center mt-1">
                  <BsLinkedin />
                  <BsGithub />
                </div>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <div className="flex items-center mt-3">
                  <p className="font-medium text-xl leading-5 text-gray-800 ">
                    Liam
                  </p>
                </div>
                <div className="flex items-center mt-1">
                  <BsLinkedin />
                  <BsGithub />
                </div>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <div className="flex items-center mt-3">
                  <p className="font-medium text-xl leading-5 text-gray-800 ">
                    Elijah
                  </p>
                </div>
                <div className="flex items-center mt-1">
                  <BsLinkedin />
                  <BsGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
