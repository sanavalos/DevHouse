import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RiGithubFill } from "react-icons/ri";
import { MdPlace } from "react-icons/md";
import { getUserById, clearUser } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import SimilarUsers from "../components/SimilarUsers";
import badgeFs from "../media/fstackdev.png";
import badgeDs from "../media/datascientist.png";

function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    return () => {
      dispatch(clearUser());
    };
  }, []);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  return (
    <div>
      <Navbar />
      <div className="flex text-center md:flex-row flex-col">
        <div className="flex md:flex-row flex-col justify-center w-full bg-slate-200">
          {user?.career && (
            <img
              src={user?.career === "full stack" ? badgeFs : badgeDs}
              className="h-36 md:h-44 lg:h-[13rem] absolute top-16 right-0 md:left-80 -rotate-12"
              alt="badge"
            />
          )}
          <div className="w-4/5 md:w-2/5 ml-10 lg:w-1/4 bg-white shadow-lg rounded-xl mt-24 mb-8 md:mb-28 border-2 border-black">
            <img
              className="w-full min-h-[25rem] rounded-t-xl max-h-[25rem]"
              src={
                user?.image
                  ? user.image
                  : "https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231709/thesomeday123170900021.jpg"
              }
              alt="User"
            />
            <div className="p-4">
              <h1 className="text-3xl font-semibold text-gray-800 text-center">
                {user?.name}
              </h1>
              <h1 className="text-xl font-semibold text-gray-800 text-center">
                {user?.country}
              </h1>
              <p className="py-2 text-lg text-gray-700">{user?.description}</p>
              {user?.github && (
                <div className="flex items-center mt-4 text-gray-700">
                  <RiGithubFill size={30} className="fill-current" />
                  <a href={user?.github} target={"_blank"} rel="noreferrer">
                    <h1 className="px-2 text-lg">
                      @{user?.github.split("com/")[1]}
                    </h1>
                  </a>
                </div>
              )}
              <div className="flex items-center mt-4 text-gray-700">
                <MdPlace size={30} className="fill-current" />
                <h1 className="px-2 text-lg">{user?.location}</h1>
              </div>
              <div className="flex m-4 items-center justify-center">
                <ul className="flex flex-wrap">
                  {user?.interest?.map((i) => (
                    <li
                      key={i}
                      className="bg-black text-yellow-300 p-2 m-2 rounded-xl"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <SimilarUsers country={user?.country} userId={user?.uid} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
