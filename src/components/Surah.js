import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import QuranCard from "./molecules/QuranCard";
import Skeleton from "./molecules/Skeleton";

const Surah = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const getData = () => {
    setIsLoading(true);
    axios
      .get("https://quran-api-id.vercel.app/surahs")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white ml-24 w-3/4  mt-32  flex flex-row wrap flex-wrap gap-5 p-6 ">
      {isLoading ? <Skeleton /> : <QuranCard data={data} />}
    </div>
  );
};

export default Surah;
