import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";

function Contact() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState("true");
  const navigate = useNavigate();

  const handleData = () => {
    if (username?.length > 0 && email.length > 0 && message.length > 0)
      setError(false);
  };

  const handleSubmit = () => {
    Swal.fire({
      icon: "success",
      title: "¡Gracias por el comentario, te contactaremos pronto!",
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/inicio");
  };

  useEffect(() => {
    handleData();
  }, [username, email, message, error]);

  useEffect(() => {
    setUsername("");
    setEmail("");
    setMessage("");
    setError(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-yellow-300 grid grid-flow-row h-screen">
      <div className="mt-14 md:mt-32 w-screen">
        <h1 className="text-4xl font-extrabold p-3 text-center">Contactanos</h1>
        <div className="mb-5 border-2 border-black rounded-xl mx-6 md:mx-40 lg:mx-96 bg-slate-200">
          <form
            action="https://getform.io/f/90b3744f-f6b0-4140-a9ae-5d57ef6034c1"
            method="POST"
            className="m-4 md:m-10"
            encType="multipart/form-data"
          >
            <div className="flex flex-col my-2">
              <label className="py-2 font-medium">Nombre:</label>
              <input
                name="name"
                className="p-3 rounded-xl"
                type="text"
                placeholder="Henry House"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="py-2 font-medium">Email:</label>
              <input
                name="email"
                className="p-3 rounded-xl"
                type="email"
                placeholder="henry@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="py-2 font-medium">Mensaje:</label>
              <textarea
                name="message"
                className="p-3 rounded-xl"
                cols={30}
                rows={4}
                type="text"
                placeholder="Escribinos tus dudas o sugerencias"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="text-center">
              {!error ? (
                <button
                  type="submit"
                  className="bg-black text-yellow-300 p-2 rounded-xl my-4 hover:bg-yellow-300 hover:text-black w-full"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              ) : (
                <button
                  className="bg-gray-500 p-2 rounded-xl my-4 w-full"
                  disabled
                >
                  Faltan datos para enviar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
