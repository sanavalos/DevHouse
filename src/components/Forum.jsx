import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
} from "../redux/actions/actions.js";
import { useDispatch, useSelector } from "react-redux";
import Posts from "./Posts";
import Chat from "../components/Chat/Chat";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Forum() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const filtered = useSelector((state) => state.filtered);
  const posts = useSelector((state) => state.posts);
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
      <div className="flex h-screen">
        <div className="flex flex-col min-h-max p-3 bg-white shadow w-[16.5rem]">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Menu del Foro</h2>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center py-4">
                <button
                  className="p-2 bg-black rounded-xl text-yellow-300 hover:bg-yellow-300 hover:text-black"
                  onClick={(e) => handleSearch(e)}
                >
                  <BsSearch />
                </button>
              </span>
              <input
                type="text"
                placeholder="Busqueda por Usuario o Titulo"
                className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <BiWorld size={40} />
                    <label className="block text-sm font-medium text-gray-900">
                      Paises
                    </label>
                    <select
                      className="bg-yellow-300 border border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-1"
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
                      <BsFilePostFill size={25} />
                      <span>Ultimos posteos</span>
                    </div>
                  </button>
                </li>
                <li className="rounded-sm">
                  <button onClick={(e) => handleFilter(e)}>
                    <div className="flex items-center p-2 space-x-3 rounded-md">
                      <MdOutlineLocalFireDepartment size={25} />
                      <span>Posteos mas comentados</span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={(e) => handleReset(e)}
            className="bg-black text-yellow-300 p-2 rounded-xl my-4 hover:bg-yellow-300 hover:text-black"
          >
            Limpiar filtros
          </button>
          {user ? (
            <Link
              to={"/posteo"}
              className="p-2 bg-black rounded-xl text-yellow-300 my-4 hover:bg-yellow-300 hover:text-black text-center"
            >
              <button>Crea un post</button>
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="container mx-auto mt-12 ml-7 max-w-2xl">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black w-[55vw]">
            POSTEOS SOBRE
            <span className="text-yellow-300 dark:text-yellow-300 ">
              {search ? " " + search.toUpperCase() : " TODOS"}
            </span>
            .
            <span className="text-3xl text-gray-900">
              {filter ? `(${filter})` : ""}
            </span>
          </h1>
          <div className="flex flex-col mt-7">
            {filtered.length > 0 ? (
              <Posts posts={filtered} />
            ) : (
              <>
                <div className="w-[50vw] px-4 py-5 bg-white rounded-lg shadow mb-7">
                  <div className="h-7 w-80 bg-slate-500 mt-1"></div>
                  <div className="h-3 w-32 bg-slate-500 mt-1"></div>
                  <div className="h-4 w-full bg-slate-500 mt-1"></div>
                  <div className="h-4 w-full bg-slate-500 mt-1"></div>
                </div>
                <div className="w-[50vw] px-4 py-5 bg-white rounded-lg shadow mb-7">
                  <div className="h-7 w-80 bg-slate-500 mt-1"></div>
                  <div className="h-3 w-32 bg-slate-500 mt-1"></div>
                  <div className="h-4 w-full bg-slate-500 mt-1"></div>
                  <div className="h-4 w-full bg-slate-500 mt-1"></div>
                </div>
                <div className="w-[50vw] px-4 py-5 bg-white rounded-lg shadow mb-7">
                  <div className="h-7 w-80 bg-slate-500 mt-1"></div>
                  <div className="h-3 w-32 bg-slate-500 mt-1"></div>
                  <div className="h-4 w-full bg-slate-500 mt-1"></div>
                  <div className="h-4 w-full bg-slate-500 mt-1"></div>
                </div>
              </>
            )}
          </div>
        </div>

        {user ? (
          <div className="max-w-[728px] mt-3 mr-7 text-center fixed right-0">
            <div className="flex flex-col max-h-[65vh] mt-10 border  shadow mb-7 bg-white">
              <Chat />
            </div>
          </div>
        ) : (
          <div className="max-w-[728px] mt-3 mr-7 text-center ">
            <div className="flex flex-col h-[83vh] mt-10 border relative shadow mb-7 bg-white">
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
