import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RiGithubFill} from "react-icons/ri";
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
    <div className="h-screen">
      <Navbar />
<<<<<<< HEAD
      <div className="place-items-center grid h-[80vh]">
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-5 ">
          {!user.image ? (
            <img
              className="w-full h-56 object-cover object-center"
              src="https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231709/thesomeday123170900021.jpg"
              alt="user"
            />
          ) : (
            <img
              className="w-full h-56 object-cover object-center"
              src={user.image}
              alt={user.name}
            />
          )}
          <div className="py-4 px-6">
            <h1 className="text-3xl font-semibold text-gray-800">
              {user?.name}
            </h1>
            <h1 className="text-l font-semibold text-gray-800">
              {user?.country}
            </h1>
            <h1 className="text-xl font-semibold text-gray-800 text-center">{user?.country}</h1>
            <p className="py-2 text-lg text-gray-700">{user?.description}</p>
            <div className="flex items-center mt-4 text-gray-700">
              <RiTeamFill className="h-6 w-6  fill-current" />
              <h1 className="px-2 text-sm">Team {user?.career}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
              <RiInstagramFill className="h-6 w-6  fill-current" />
              <h1 className="px-2 text-sm">@{user?.instagram}</h1>
=======
      <div className="flex justify-center h-[calc(100%_-_10.5rem)] bg-slate-200">
        <div className="w-1/4 bg-white shadow-lg rounded-xl my-16 border-2 border-black">
          <img
            className="w-full h-72 rounded-t-xl"
            src={
              user?.image
                ? user.image
                : "https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231709/thesomeday123170900021.jpg"
            }
            alt="User"
          />
          <div className="py-4 px-6 space-y-4">
            <h1 className="text-3xl font-semibold text-gray-800 text-center">
              {user?.name}
            </h1>
            <h1 className="text-xl font-semibold text-gray-800 text-center">{user?.country}</h1>
            <p className="py-2 text-lg text-gray-700">{user?.description}</p>
            <div className="flex items-center mt-4 text-gray-700">
              <RiGithubFill className="h-6 w-6 fill-current" />
              <h1 className="px-2">{user?.github}</h1>
>>>>>>> a927aa3161ca9d7c011e1958fec75fdb0c40add7
            </div>
            <div className="flex items-center mt-4 text-gray-700">
              <MdPlace className="h-6 w-6  fill-current" />
              <h1 className="px-2">{user.location}</h1>
            </div>
            <div className="flex m-4 items-center justify-center">
              <ul className="flex flex-wrap">
                {user?.interest?.map((i) => (
                  <li className="bg-black text-yellow-300 p-2 m-2 rounded-xl">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
