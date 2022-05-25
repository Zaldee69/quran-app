import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Ayah from "../components/Ayah";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Surah = ({ res }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { noSurah } = useParams();


  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://quran-api-id.vercel.app/surahs/${noSurah}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <LeftSidebar />
      <Ayah isLoading={isLoading} data={data} />
      <RightSidebar />
    </>
  );
};

export default Surah;
