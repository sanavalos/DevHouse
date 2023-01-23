import React, { useEffect } from "react";
import IndexMap from "../components/IndexMap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getUsers, getPosts } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.div className="inline-block">
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
}

function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-between bg-slate-200 h-[780px] md:h-screen">
        <div className="ml-2 lg:ml-16 hidden md:block">
          <div className="flex flex-col justify-center w-40 md:w-full mt-80">
            <p className="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-2xl lg:text-4xl text-black">
              USUARIOS REGISTRADOS:{" "}
              <span className="text-yellow-500">
                <Number n={users.length} />
              </span>
            </p>
            <p className="mb-4 text-xl font-extrabold tracking-tight leading-none md:text-2xl lg:text-4xl text-black">
              POSTEOS UNICOS:{" "}
              <span className="text-yellow-500">
                <Number n={posts.length} />
              </span>
            </p>
            <div className="flex flex-col text-center mt-10 mr-2 md:mr-0">
              <p className="text-xl md:text-2xl font-extrabold text-gray-900">
                HenryHouse es la casa de la comunidad{" "}
                <span className="text-yellow-500">HENRY</span>
              </p>
            </div>
          </div>
        </div>
        <IndexMap />
      </div>
      <Footer />
    </>
  );
}

export default Home;
