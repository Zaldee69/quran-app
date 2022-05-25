import React from "react";
import SearchIcon from "./assets/icons/SearchIcon";

const Search = () => {
  return (
    <div className=" rounded-full  md:w-60 sm:w-70 lg:w-96 h-10 inpt-focus:bg-black flex justify-between ml-56 items-center border shadow-sm">
      <input
        style={{ outline: "none" }}
        type="text"
        placeholder="Search"
        className="ml-4 w-4/5 inpt-hover:bg-black "
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
