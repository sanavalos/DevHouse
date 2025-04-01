import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreateAccount = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (user !== undefined) {
        await createUser(user?.email, user?.password);
        Swal.fire({
          icon: "success",
          title: "¡Bienvenido a Dev House!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/inicio");
      }
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        Swal.fire({
          icon: "error",
          title: "El email ya fue usado",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      if (error.code === "auth/weak-password") {
        Swal.fire({
          icon: "error",
          title: "La contraseña debe tener mínimo 6 carácteres",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      if (error.code === "auth/internal-error") {
        Swal.fire({
          icon: "error",
          title: "Llena el espacio de la contraseña",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      if (error.code === "auth/invalid-email") {
        Swal.fire({
          icon: "error",
          title: "Usa un email válido",
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
              CREA UNA NUEVA CUENTA
            </h1>
            <h3 className="text-lg">
              ¿Ya tienes una cuenta?, puedes ingresar{" "}
              <Link
                to="/conectarse"
                className="underline hover:text-red-500 hover:text-xl"
              >
                aquí
              </Link>
            </h3>
          </div>
          <form className="sm:p-2 p-8 w-2/3" onSubmit={handleSubmit}>
            <div className="flex flex-col my-2 lg:items-center">
              <label className="py-2 font-medium">Email:</label>
              <input
                name="email"
                className="p-3 rounded-xl w-full"
                type="email"
                onChange={handleChanges}
              />
            </div>
            <div className="flex flex-col my-2 lg:items-center">
              <label className="py-2 font-medium">Contraseña:</label>
              <input
                name="password"
                className="p-3 rounded-xl w-full"
                type="password"
                onChange={handleChanges}
              />
            </div>
            <button className="p-2 my-2 md:p-4 md:my-6 bg-black text-yellow-300 rounded-xl hover:scale-110 hover:text-red-500">
              Crea cuenta
            </button>
          </form>
        </div>
        <div className="w-1/2 lg:w-2/5 bg-[#FFFF01] hidden md:flex md:flex-col md:justify-center md:items-center">
          <div className="">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Bienvenido a la mejor comunidad Dev
            </h1>
          </div>
          <div className="m-2 mt-6 md:m-8">
            <img
              src="https://cdn.forbes.co/2021/01/Team-Henry-1280x720-1.jpg"
              className="rounded-lg"
              alt="comunidad"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateAccount;
