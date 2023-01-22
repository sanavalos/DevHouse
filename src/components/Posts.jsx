import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PostComment from "./PostComment";
import { getResponses } from "../redux/actions/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";

function Posts({ posts }) {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const responses = useSelector((state) => state.responses);
  const postId = useSelector((state) => state.postId);
  const { user } = UserAuth();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡No podrás volver atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      result.isConfirmed &&
        deleteDoc(doc(db, "posts", id)).then(() => {
          Swal.fire("¡Eliminado!", "El post ha sido eliminado.", "success");
        });
    });
  };

  return posts.map((post) => {
    return (
      <div
        key={post.id}
        className="m-4 mr-8 last:mb-24 md:w-[50vw] px-4 py-5 bg-slate-200 rounded-lg shadow md:mb-7"
      >
        {post.userId === user.uid && (
          <button
            className="p-2 my-4 bg-red-600 rounded-xl text-white right-0"
            onClick={() => handleDelete(post.id)}
          >
            Borrar
          </button>
        )}
        <div className="m-2 font-semibold text-gray-700 text-3xl">
          {post.title}
        </div>
        <div className="text-sm font-medium text-gray-500 truncate m-2">
          {post.date} - {post.country || "Todos"} -{" "}
          <Link
            to={`/perfil/${post.userId}`}
            className="uppercase hover:text-red-500"
          >
            {post.user || "Anonimo"}
          </Link>{" "}
        </div>
        <div className="text-md font-medium text-black m-2">
          {post.comments}
        </div>
        {user?.uid ? (
          <PostComment postId={post.id} />
        ) : (
          <div className="flex w-full">
            <button
              className="rounded-lg  hover:text-red-500 m-2"
              onClick={() => navigate("/conectarse")}
            >
              Inicia sesion para comentar
            </button>
          </div>
        )}
        {postId === post.id &&
          showComments &&
          responses?.map((response) => {
            return (
              <div
                key={response.id}
                className=" px-4 py-5 shadow mb-7 bg-slate-300 rounded-xl"
              >
                <Link
                  to={`/perfil/${response.userId}`}
                  className="uppercase text-sm font-medium text-gray-500 truncate"
                >
                  {response.user}
                </Link>
                <div>{response.comment}</div>
              </div>
            );
          })}
        {!showComments ? (
          <button
            onClick={() => {
              dispatch(getResponses(post.id)) && setShowComments(true);
            }}
            className="m-2 hover:text-red-500 hover:scale-105"
          >
            Mostrar comentarios
          </button>
        ) : (
          postId === post.id && (
            <button
              onClick={() => setShowComments(false)}
              className="m-2 hover:text-red-500 hover:scale-105"
            >
              Ocultar comentarios
            </button>
          )
        )}
      </div>
    );
  });
}

export default Posts;
