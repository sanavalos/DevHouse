import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usersCountry } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

function SimilarUsers({ country, userId }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.usersCountry);
  const [moreUsers, setMoreUsers] = useState(false);

  useEffect(() => {
    setMoreUsers(false);
    return () => {
      dispatch(usersCountry([]));
    };
  }, [userId]);

  const handleMoreUsers = () => {
    setMoreUsers(true);
    dispatch(usersCountry(country, userId));
  };
  return (
    <div className="flex flex-col justify-center bg-slate-200 md:ml-24 lg:ml-40 md:mr-8 mb-20 mx-2">
      <p className="text-2xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-black">
        HENRYS EN {country?.toUpperCase()}
      </p>
      {moreUsers &&
        (users?.length > 0 ? (
          users.map((user) => (
            <div
              key={user.uid}
              className="flex items-center text-center rounded-xl shadow-md flex-row bg-gray-800 mt-6 mx-2 md:mt-12 max-w-md border-2 border-black"
            >
              <div className="h-32 w-36">
              <img
                className="object-cover w-full h-full rounded-l-lg"
                src={user.image}
                alt=""
              />
              </div>
              <div className="w-full flex flex-col items-center justify-center pt-2 px-0 md:p-4 leading-normal h-32">
                <h5 className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-yellow-300">
                  <Link to={`/perfil/${user.uid}`}>{user?.name}</Link>
                </h5>
                <p className="mb-2 text-sm md:text-base font-normal text-slate-300">
                  {user?.location}
                </p>
                <p className="mb-3 text-sm md:text-base font-normal text-slate-300">
                  {user?.github ? (
                    <a href={user?.github} target={"_blank"} rel="noreferrer">
                      {user?.github}
                    </a>
                  ) : (
                    "No tengo github"
                  )}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-black text-yellow-300 p-2 rounded-xl my-4 flex justify-center">
            No hay mas henrys en este pais
          </div>
        ))}

      {!moreUsers && (
        <button
          onClick={() => handleMoreUsers()}
          className="bg-black text-yellow-300 p-2 rounded-xl my-4 hover:bg-yellow-300 hover:text-black"
        >
          VER MAS HENRYS
        </button>
      )}
    </div>
  );
}

export default SimilarUsers;
