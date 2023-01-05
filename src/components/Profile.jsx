import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RiGithubFill, RiGroup2Fill } from "react-icons/ri";
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
          <div className="py-4 px-6">
            <h1 className="text-3xl font-semibold text-gray-800 text-center">
              {user?.name}
            </h1>
            <h1 className="text-xl font-semibold text-gray-800 text-center">
              {user?.country}
            </h1>
            <p className="py-2 text-lg text-gray-700">{user?.description}</p>
            <div className="flex items-center mt-4 text-gray-700">
              <RiGroup2Fill className="h-6 w-6 fill-current"/>
              <h1 className="px-2 capitalize">{user?.career}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700">
              <RiGithubFill className="h-6 w-6 fill-current" />
              <h1 className="px-2">{user?.github}</h1>
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
