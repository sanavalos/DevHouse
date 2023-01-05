import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { usersCountry } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

function SimilarUsers({ country, userId }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersCountry);

  useEffect(() => {
    return () => {
      dispatch(usersCountry([]));
    };
  }, [userId]);
  return (
    <div className="flex flex-col justify-center bg-slate-200 ml-[13vw] mr-3">
      <p className="text-2xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-black">
        HENRYS EN {country?.toUpperCase()}
      </p>
      {users.length > 0 ? (
        users.map((user) => (
          <div className="flex items-centerborder rounded-xl shadow-md flex-row  bg-gray-800 mt-12 max-w-xl border-2 border-black">
            <img
              className="object-cover  rounded-t-lg max-h-32 w-36 md:rounded-none md:rounded-l-lg"
              src={user.image}
              alt=""
            />
            <div className="flex flex-col justify-between pt-2 p-4 leading-normal h-[13vh]">
              <h5 className=" text-2xl font-bold tracking-tight text-white hover:text-yellow-300">
                <Link to={`/perfil/${user.uid}`}>{user?.name}</Link>
              </h5>
              <p className="mb-2 font-normal text-slate-300">
                {user?.location}
              </p>
              <p className="mb-3  font-normal text-slate-300">
                {user?.description ?? "No escribí nada sobre mi"}
              </p>
            </div>
          </div>
        ))
      ) : (
        <button
          onClick={() => dispatch(usersCountry(country, userId))}
          className="bg-black text-yellow-300 p-2 rounded-xl my-4 hover:bg-yellow-300 hover:text-black"
        >
          VER MAS USUARIOS
        </button>
      )}
    </div>
  );
}

export default SimilarUsers;
