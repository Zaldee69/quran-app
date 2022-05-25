import React from "react";
import { Link } from "react-router-dom";

const HadithCard = ({ data }) => {
  return (
    <>
      {data?.map((itm) => {
        return (
          <Link to={`/hadiths/${itm.slug}`}>
            <div className="flex flex-row border rounded-md w-72 h-15 justify-between px-5 py-3  items-center sp">
              <span className="font-poppins font-semibold text-md">
                {itm.name}
              </span>
              <small className="font-poppins">{itm.total}</small>
            </div>
            
          </Link>
        );
      })}
    </>
  );
};

export default HadithCard;
