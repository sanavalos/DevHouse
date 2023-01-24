import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiWorld } from "react-icons/bi";
import { BsFilePostFill, BsSearch } from "react-icons/bs";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import {
  getPosts,
  filterPosts,
  searchPosts,
  clearFilter,
  orderByLastPost,
  mostCommented,
} from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../components/Posts";
import Chat from "../components/Chat/Chat";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Forum() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const filtered = useSelector((state) => state.posts.filtered);
  const posts = useSelector((state) => state.posts.posts);
  const { user } = UserAuth();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    dispatch(filterPosts(search));
  }, [posts]);

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

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    dispatch(filterPosts(e.target.value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchPosts(search));
  };

  const handleLastPost = () => {
    setFilter("ultimos");
    dispatch(orderByLastPost());
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter("comentarios");
    dispatch(mostCommented());
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(clearFilter());
    setSearch("TODOS");
    setFilter("");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-full">
        <div className="flex flex-col md:mt-0 p-3 bg-white shadow md:w-[500px] lg:w-[400px] items-center">
          <div className="space-y-3">
            <div className="flex justify-center">
              <h2 className="text-2xl font-bold">Menu del Foro</h2>
            </div>
            <div className="flex">
              <button
                className="p-3 bg-black rounded-xl text-yellow-300 hover:bg-yellow-300 hover:text-black"
                onClick={(e) => handleSearch(e)}
              >
                <BsSearch />
              </button>
              <input
                type="text"
                placeholder="Busqueda por Usuario o Titulo"
                className="w-72 p-2 border text-sm rounded-xl focus:outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex">
              <ul className="pt-2 pb-4 space-y-1">
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <BiWorld size={30} />
                    <label className="font-medium text-gray-900">
                      Paises
                    </label>
                    <select
                      className="bg-yellow-300 border border-gray-900 text-gray-900 rounded-lg w-52 p-1"
                      onChange={(e) => handleChange(e)}
                    >
                      {countries.map((country) => (
                        <option key={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </li>
                <li className="rounded-sm">
                  <button onClick={() => handleLastPost()}>
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                      <BsFilePostFill size={30} />
                      <span className="font-medium text-gray-900 hover:underline">Ultimos posteos</span>
                    </div>
                  </button>
                </li>
                <li className="rounded-sm">
                  <button onClick={(e) => handleFilter(e)}>
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                      <MdOutlineLocalFireDepartment size={30} />
                      <span className="font-medium text-gray-900 hover:underline">Posteos mas comentados</span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={(e) => handleReset(e)}
            className="bg-black text-yellow-300 p-2 rounded-xl my-4 w-80 hover:bg-yellow-300 hover:text-black"
          >
            Limpiar filtros
          </button>
          {user ? (
            <Link
              to={"/posteo"}
              className="p-2 bg-black rounded-xl text-yellow-300 my-4 w-80 hover:bg-yellow-300 hover:text-black text-center"
            >
              <button>Crea un post</button>
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="container mx-auto mt-12 md:ml-7 max-w-2xl">
          <h1 className="mb-4 pl-3 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black md:w-[55vw]">
            POSTEOS SOBRE
            <span className="text-yellow-300 dark:text-yellow-300 ">
              {search ? " " + search.toUpperCase() : " TODOS"}
            </span>
            .
            <span className="text-3xl text-gray-900">
              {filter ? `(${filter})` : ""}
            </span>
          </h1>
          <div className="flex flex-col mt-7 md:min-h-screen">
            {filtered?.length > 0 ? (
              <Posts posts={filtered} />
            ) : (
              <>
                <div className="md:w-[50vw] px-4 py-10 bg-white rounded-lg shadow mb-20 text-center">
                  <p className="text-xl">Aún no existen posteos sobre {search.toUpperCase()}. Puedes crear uno en la sección de crea un post</p>
                </div>
              </>
            )}
          </div>
        </div>
        {user ? (
          <div className="flex justify-center mb-16 md:max-w-[728px] md:mb-0 md:mt-3 md:mr-7 text-center relative md:fixed right-0">
            <div className="flex max-h-[65vh] md:mt-10 border rounded-lg shadow md:mb-7 bg-white">
              <Chat />
            </div>
          </div>
        ) : (
          <div className="w-[360px] mb-16 -mr-2 md:max-w-[728px] md:mb-0 md:mt-3 md:mr-7 text-center relative md:fixed right-0">
            <div className="flex flex-col h-[83vh] md:mt-10 border relative shadow md:mb-7 bg-white">
              <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-2xl font-bold m-10">
                  Inicia sesion para chatear
                </h1>
                <Link to="/conectarse">
                  <button className="bg-yellow-300 text-black font-bold py-2 px-4 rounded">
                    Iniciar sesion
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Forum;
