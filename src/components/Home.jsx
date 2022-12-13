import React from "react";
import IndexMap from "./IndexMap";
import Forum from "./Forum";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div>Home</div>
      <IndexMap />
      <Forum />
    </>
  );
}

export default Home;
