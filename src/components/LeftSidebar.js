import React from "react";
import BookIcon from "./assets/icons/BookIcon";
import HeartIcon from "./assets/icons/HeartIcon";
import PaperPlaneIcon from "./assets/icons/PaperPlaneIcon";

const LeftSidebar = () => {
  return (
    <div className="fixed shadow-xl top-10 ">
      <ul className="flex  w-24  items-center min-h-screen mt-32 flex-col gap-10  ">
        <li>
          <BookIcon />
        </li>
        <li>
          <HeartIcon />
        </li>
        <li>
          <PaperPlaneIcon />
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
