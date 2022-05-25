import React from "react";
import Surah from "../components/Surah";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <LeftSidebar />
      <Surah />
      <RightSidebar />
    </>
  );
};

export default Home;
