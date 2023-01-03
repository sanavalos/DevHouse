import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { BiWorld } from "react-icons/bi";
import { BsFilePostFill } from "react-icons/bs";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import {
  getPosts,
  filterPosts,
  searchPosts,
} from "../redux/actions/actions.js";
import { useDispatch, useSelector } from "react-redux";
import Posts from "./Posts";
import Chat from "../components/Chat/Chat";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Forum() {
  const [search, setSearch] = useState("");
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
    "Colombia",
    "Argentina",
    "Chile",
    "España",
    "Mexico",
    "Guatemala",
    "Perú",
    "Uruguay",
    "Bolivia",
    "Venezuela",
    "Paraguay",
    "Ecuador",
    "Panama",
    "Costa Rica",
    "Cuba",
    "Rep. Dominicana",
    "Honduras",
    "El Salvador",
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
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="flex flex-col h-screen p-3 bg-white shadow w-[16.5rem]">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Menu del Foro</h2>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center py-4">
                <button
                  className="p-2 focus:outline-none focus:ring"
                  onClick={(e) => handleSearch(e)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </span>
              <input
                type="text"
                placeholder="Usuario o Titulo"
                className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <BiWorld size={40} />
                    <label
                      for="countries"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Paises
                    </label>
                    <select
                      className="bg-gray-300 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-yellow-300 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => handleChange(e)}
                    >
                      {countries.map((country) => (
                        <option value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </li>
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <BsFilePostFill size={20} />
                    <span>Ultimos posteos</span>
                  </div>
                </li>
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <MdOutlineLocalFireDepartment size={25} />
                    <span>Posteos mas vistos</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
            <button ><a href="/posteo">Crea un post</a></button>
        </div>

        <div className="container mx-auto mt-12 ml-7 max-w-2xl">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
            POSTEOS {search ? "EN" : ""}
            <span className="text-yellow-300 dark:text-yellow-300 ">
              {search ? " " + search.toUpperCase() : "GENERALES"}
            </span>
            .
          </h1>
            { allPost?.map((e) =>{return(
            
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
        <div className="max-w-[728px] mr-7 text-center ">
          <div className="flex flex-col h-[83vh] mt-10 border relative shadow mb-7 bg-white">
            {user ? (
              <Chat />
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-2xl font-bold">
                  Inicia sesion para chatear
                </h1>
                <Link to="/login">
                  <button className="bg-yellow-300 text-black font-bold py-2 px-4 rounded">
                    Iniciar sesion
                  </button>
                </Link>
              </div>
            )}
          </div>
    )})}
        </div>
      </div>
    </>
  );
}

export default Forum;
