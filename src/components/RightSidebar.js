import React from "react";

const RightSidebar = () => {
  return (
    <div className="fixed right-0 min-h-screen md:hidden lg:flex top-20 p-10 shadow-lg  flex-col gap-5">
      <div className="flex flex-row gap-14 mt-10  border-b pb-5 ">
        <div className="flex flex-col">
          <h2 className="text-md text-bold font-poppins">Salam,</h2>
          <h2 className="text-2xl text-extrabold font-poppins">Rizal</h2>
        </div>
        <img src="/images/muslim.png" />
      </div>
      <div className="flex flex-row  gap-14  border-b pb-5">
        <div className="flex flex-col">
          <div className="flex flex-row gap-14">
            <span className="text-bold text-sm font-poppins text-[#05C0C7]">
              LAST READ
            </span>
            <img src="/images/book.png" />
          </div>
          <h2 className="text-md text-semibold font-poppins">Al-Fatihah</h2>
          <small className="text-sm text-gray-500 text-bold font-poppins">
            Ayah 1
          </small>
        </div>
      </div>
      <div className="flex flex-row  gap-14  border-b pb-5">
        <div className="flex flex-col">
          <div className="flex flex-row gap-14">
            <span className="text-bold text-sm font-poppins text-[#05C0C7]">
              LAST LISTENED
            </span>
            <img className="-ml-4" src="/images/earphone.png" />
          </div>
          <h2 className="text-md text-semibold font-poppins">Al-Fatihah</h2>
          <small className="text-sm text-gray-500 text-bold font-poppins">
            Ayah 1
          </small>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
