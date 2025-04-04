import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Forget = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        icon: "success",
        title: "El email para recuperar la contraseña fue enviado",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/conectarse");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "El usuario no se encuentra registrado",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      if (error.code === "auth/missing-email") {
        Swal.fire({
          icon: "error",
          title: "Escribe un email válido",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex text-center h-screen">
        <div className="w-full md:w-[50%] lg:w-[60%] bg-slate-200 flex flex-col justify-center items-center">
          <div className="">
            <h1 className="text-xl md:text-3xl mb-4 font-extrabold">
              ¿OLVIDASTE LA CONTRASEÑA?
            </h1>
            <h3 className="text-lg">
              Sino tienes cuenta, puedes crearla{" "}
              <Link
                to="/crearcuenta"
                className="underline hover:text-red-500 hover:text-xl"
              >
                aquí
              </Link>
            </h3>
          </div>
          <form className="sm:p-2 p-8 w-2/3" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center my-2 lg:tems-center">
              <label className="py-2 font-medium">Email registrado:</label>
              <input
                name="email"
                className="p-3 rounded-xl w-full"
                type="email"
                onChange={handleChanges}
              />
            </div>
            <button className="p-4 my-6 bg-black text-yellow-300 rounded-xl hover:scale-110 hover:text-red-500">
              Recuperar contraseña
            </button>
          </form>
        </div>
        <div className="w-1/2 lg:w-2/5 bg-[#FFFF01] hidden md:flex md:flex-col md:justify-center md:items-center">
          <div className="">
            <h1 className="text-2xl m-2 md:text-4xl font-semibold">
              Esperamos tu visita en la mejor comunidad developer
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Forget;
