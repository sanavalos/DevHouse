import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [userAccount, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const { user } = UserAuth();
  const { googleSignIn } = UserAuth();
  const handleChanges = (e) => {
    setUser({ ...userAccount, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user != null) {
      navigate("/cuenta");
    }
  }, [user]);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/cuenta");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await signIn(userAccount.email, userAccount.password);
      Swal.fire({
        icon: "success",
        title: "¡Bienvenido, te extrañamos!",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/cuenta");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "El usuario no fue encontrado",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      if (error.code === "auth/wrong-password") {
        Swal.fire({
          icon: "error",
          title: "Contraseña equivocada",
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
        <div className="w-full md:w-[50%] lg:w-[60%] bg-slate-200">
          <div className="mt-28 md:mt-48 lg:mt-60">
            <h1 className="text-xl mb-2 md:text-3xl md:mb-4 font-extrabold">
              INGRESA A TU CUENTA
            </h1>
            <h3 className="md:text-lg">
              Sino tienes cuenta, puedes crearla{" "}
              <Link
                to="/crearcuenta"
                className="underline hover:text-red-500 hover:text-xl"
              >
                aquí
              </Link>
            </h3>
          </div>
          <form className="mx-3 md:m-8" onSubmit={handleSubmit}>
            <div className="flex flex-col my-2 lg:items-center">
              <label className="md:py-2 font-medium">Email:</label>
              <input
                name="email"
                className="p-1 md:p-3 rounded-xl lg:w-3/4"
                type="email"
                onChange={handleChanges}
              />
            </div>
            <div className="flex flex-col my-2 lg:items-center">
              <label className="md:py-2 font-medium">Contraseña:</label>
              <input
                name="password"
                className="p-1 md:p-3 rounded-xl lg:w-3/4"
                type="password"
                onChange={handleChanges}
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-6 justify-center">
              <button className="p-2 my-2 md:p-4 md:my-6 bg-black text-yellow-300 rounded-xl hover:scale-110 hover:text-red-500">
                Ingresa
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center p-2 my-2 md:p-4 md:my-6 bg-black text-yellow-300 rounded-xl hover:scale-110 hover:text-red-500"
              >
                <FcGoogle className="mr-2" />
                Ingreso Google
              </button>
              <Link
                to="/olvido"
                className="p-2 my-2 md:p-4 md:my-6 bg-black text-yellow-300 rounded-xl hover:scale-110 hover:text-red-500"
              >
                <button>Olvide la contraseña</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="w-[50%] lg:w-[40%] bg-yellow-300 hidden md:block">
          <div className="mt-44 md:mt-60 lg:mt-44">
            <h1 className="text-4xl font-semibold">¡Hola de nuevo Henry!</h1>
          </div>
          <div className="m-3 mt-8 md:m-8">
            <img
              src="https://statics.forbesargentina.com/2022/05/627141a292f9b.png"
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

export default Login;
