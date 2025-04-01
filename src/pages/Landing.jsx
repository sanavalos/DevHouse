import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex flex-col h-screen md:flex-row text-center">
      <div className="flex justify-center items-center md:w-1/2 bg-yellow-300 h-1/2 md:h-screen">
        <div className="">
          <h1 className="text-3xl my-6 mt-12 lg:text-7xl md:text-5xl">
            ¡Bienvenido!
          </h1>
          <p className="m-4 text-lg">
            Entra a la mejor comunidad de devs en el mundo, donde puedes ver otros en tu zona, chatear e intercambiar ideas, historias, proyectos y compartir muchas sonrisas y buena vibra.
          </p>
          <Link to="/inicio">
            <button className="px-7 py-4 bg-black text-white rounded-lg hover:scale-110 m-6 hover:text-red-500">
              Ingresar
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-black h-screen md:h-screen flex justify-center items-center">
        <div className="grid grid-cols-3 gap-2 m-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1920px-Flag_of_Argentina.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/135px-Flag_of_Bolivia.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/749px-Flag_of_Brazil.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/800px-Flag_of_Canada.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/135px-Flag_of_Chile.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1280px-Flag_of_Colombia.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1920px-Flag_of_Costa_Rica.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/800px-Flag_of_Cuba.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/1280px-Flag_of_Ecuador.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/1920px-Flag_of_El_Salvador.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/1920px-Flag_of_Guatemala.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/1920px-Flag_of_Honduras.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/1920px-Flag_of_Nicaragua.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/1280px-Flag_of_Panama.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1920px-Flag_of_Paraguay.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1280px-Flag_of_Peru.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
          <div  className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1280px-Flag_of_Venezuela.svg.png"
            className="rounded-lg h-12 w-20 md:h-[120px] md:w-[180px]"
            alt="Flag"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
