import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import  axios  from 'axios';
import HadithCard from './../components/molecules/HadithCard';

const Hadiths = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://hadis-api-id.vercel.app/hadith")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <LeftSidebar />
      <div className="bg-white ml-24 w-3/4  mt-32 justify-center  flex flex-row wrap flex-wrap gap-5 p-6 ">
        <HadithCard data={data} />
      </div>

      <RightSidebar />
    </div>
  );
};

export default Hadiths;
