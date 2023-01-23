import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center h-[calc(100%_-_10.5rem)] bg-slate-200">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold m-4">TE HAS PERDIDO</h1>
          <img
            src="https://blog.soyhenry.com/content/images/2021/12/Banner4.png"
            className="rounded-lg"
            alt="bannerhenry"
          />
          <p className="text-2xl mt-4">
            Regresa a{" "}
            <Link to={"/inicio"}>
              <button className="p-2 bg-black text-yellow-300 rounded-lg hover:text-red-500 hover:scale-110">
                Home
              </button>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
