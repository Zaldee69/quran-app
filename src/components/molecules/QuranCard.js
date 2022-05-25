import React from "react";
import HeartIcon from "../assets/icons/HeartIcon";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      {data?.map((res) => {
        return (
          <Link
            to={`/quran/${res?.number}`}
            className="bg-white w-52 justify-center items-center transition duration-200 ease-in transform sm:hover:scale-105 hover:z-40   cursor-pointer p-4 rounded-2xl shadow-md "
          >
            <div className="flex flex-row justify-between">
              <span className="text-[#05C0C7] text-sm py-0.5 font px-2 rounded-full bg-[#DAF1EC]">
                {res.number}
              </span>
              <HeartIcon />
            </div>
            <div className="flex flex-col  pt-4">
              <span className="text-md text-bold font-poppins ">
                {res.name}
              </span>
              <span className="text-gray-500 font-poppins text-sm">
                {res.translation}
              </span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
