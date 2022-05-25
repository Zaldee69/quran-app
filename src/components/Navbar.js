import React from "react";
import Search from "../components/Search";
import BellIcon from "./assets/icons/BellIcon";
import HeadphoneIcon from "./assets/icons/HeadphoneIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-5 pt-5 shadow-md fixed left-0 top-0 right-0 z-50 bg-[#fff] pb-5">
      <ul className="flex flex-row justify-between items-center gap-5">
        <li className="flex flex-row items-center gap-10 ">
          {/* <a target="_blank" href="https://icons8.com/icon/26uQ69R5ZmW0/quran">Quran icon by Icons8</a> */}
          <img src="https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/000000/external-quran-islamic-smashingstocks-circular-smashing-stocks-2.png" />
          <div className="flex flex-row gap-5">
            <Link to="/" className="text-xl text-bold font-poppins">
              Quran
            </Link>
            <Link to="/hadiths" className="text-xl text-bold font-poppins ">Hadith</Link>
          </div>
        </li>
        <li className="flex flex-row gap-10 items-center">
          <Search />
          <div className="flex flex-row gap-3">
            <div className="shadow-sm border rounded-full p-2">
              <BellIcon className="h-6 " />
            </div>
            <div className="shadow-2xl border rounded-full py-2 px-2.5">
              <HeadphoneIcon className="h-5" />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
