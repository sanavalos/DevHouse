import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RiRadioButtonLine, RiTeamFill, RiInstagramFill } from "react-icons/ri";
import { MdPlace } from "react-icons/md";
import { getUserById } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  return (
    <div>
      <Navbar />
      <div className="place-items-center grid h-[80vh]">
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-5 ">
          <img
            className="w-full h-56 object-cover object-center"
            src={
              user?.image
                ? user.image
                : "https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
            }
            alt="Liam"
          />
          <div className="flex items-center px-6 py-3 bg-gray-900">
            {user?.status === "En linea" ? (
              <RiRadioButtonLine className="h-6 w-6 text-green-500 fill-current" />
            ) : (
              <RiRadioButtonLine className="h-6 w-6 text-red-500 fill-current" />
            )}

            <h1 className="mx-3 text-white font-semibold text-lg">
              {user?.status}
            </h1>
          </div>
          <div className="py-4 px-6">
            <h1 className="text-3xl font-semibold text-gray-800">
              {user?.name}
            </h1>
            <h1 className="text-l font-semibold text-gray-800">Argentina</h1>
            <p className="py-2 text-lg text-gray-700">{user?.description}</p>
            <div className="flex items-center mt-4 text-gray-700">
              <RiTeamFill className="h-6 w-6  fill-current" />
              <h1 className="px-2 text-sm">Team {user?.team}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
              <RiInstagramFill className="h-6 w-6  fill-current" />
              <h1 className="px-2 text-sm">@{user?.instagram}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
              <MdPlace className="h-6 w-6  fill-current" />
              <h1 className="px-2 text-sm">{user.location}</h1>
            </div>

            <div className="flex m-4 items-center justify-center">
              <ul className="flex flex-wrap">
                {user?.interest?.map((i) => (
                  <li className="bg-black text-yellow-300 p-2 m-2 rounded-xl">
                    {i}
                  </li>
                ))}
              </ul>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Profile;
