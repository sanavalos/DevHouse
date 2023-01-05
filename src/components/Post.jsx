import React from "react";
import { useState } from "react";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { v4 } from "uuid";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import Footer from "./Footer";

function Post() {
  const [post, setPost] = useState({
    title: "",
    date: Date(),
    user: "",
    comments: "",
    id: "",
    userId: "",
    country: "",
    timestamp: new Date(),
    responses: 0,
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const countries = [
    "Todos",
    "Argentina",
    "Bolivia",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Ecuador",
    "España",
    "El Salvador",
    "Guatemala",
    "Honduras",
    "Mexico",
    "Panama",
    "Paraguay",
    "Perú",
    "Rep. Dominicana",
    "Uruguay",
    "Venezuela",
  ];
  const { user } = UserAuth();

  function handleChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    if (post.title === "") {
      setError("El titulo es obligatorio");
    } else if (post.country === "") {
      setError("Selecciona un país");
    } else if (post.comments.length < 10) {
      setError("La descripción debe ser mayor a 10 caracteres");
    } else {
      setError(null);
    }
  }

  const handleSubmit = async (e) => {
    if (error === null) {
      try {
        e.preventDefault();
        const uuid = v4();
        await setDoc(doc(db, "posts/" + uuid), {
          title: post.title,
          date: new Date().toLocaleDateString(),
          user: user?.displayName,
          comments: post.comments,
          id: uuid,
          userId: user?.uid,
          country: post.country,
          timestamp: Date.now(),
          responses: 0,
        });
        Swal.fire({
          icon: "success",
          title: "Posteo realizado con exito",
          showConfirmButton: false,
          timer: 2000,
        });

        navigate("/foro");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center h-[calc(100%_-_10.5rem)] bg-yellow-300 w-full">
        <form className="m-8">
          <h2 className="m-8 font-extrabold text-2xl text-center">
            CREA TU POST
          </h2>
          <h3 className="m-5 font-extrabold text-xl text-center">{error}</h3>
          <div className="flex flex-col my-2">
            <label className="py-2 font-semibold text-lg">Titulo</label>
            <input
              className="p-3 rounded-xl w-[800px]"
              type="text"
              name="title"
              value={post.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="my-6">
            <label className="py-2 font-semibold text-lg mr-4">
              País donde publicar
            </label>
            <select
              name="country"
              onChange={(e) => handleChange(e)}
              className="rounded-xl bg-black text-yellow-300"
            >
              {" "}
              <option disabled selected defaultValue>
                Selecionar un pais
              </option>{" "}
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label className="py-2 font-semibold text-lg">Comentario</label>
            <textarea
              name="comments"
              id=""
              cols="30"
              rows="9"
              value={post.comments}
              onChange={(e) => handleChange(e)}
              className="rounded-xl p-5"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="p-3 text-center bg-black rounded-xl text-yellow-300 my-4 hover:bg-transparent hover:border-2 hover:border-black hover:text-black w-full"
          >
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Post;
