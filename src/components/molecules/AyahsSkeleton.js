import React from "react";

const AyahsSkeleton = () => {
  const data = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="flex flex-col w-100 gap-3  justify-center bg-white ml-24 w-3/4  mt-32 rounded-2xl  wrap flex-wrap  p-6 shadow-sm">
      <div className="w-40 h-10 mx-auto bg-gray-300 animate-pulse rounded-xl"></div>
      <div className="w-20 h-6 mx-auto bg-gray-300 animate-pulse rounded-md"></div>
      <div className="flex flex-row justify-between py-5 border-b">
        <div className="flex flex-row items-center space-x-3">
          <div className="w-20 h-6 mx-auto bg-gray-300 animate-pulse rounded-md"></div>
          <span className="font-poppins"> | </span>
          <div className="w-20 h-6 mx-auto bg-gray-300 animate-pulse rounded-md"></div>
          <span className="font-poppins"> | </span>
          <span className="w-20 h-6 mx-auto bg-gray-300 animate-pulse rounded-md"></span>
        </div>
        <div className="flex flex-row gap-2 ">
          <div className="flex flex-row border-r gap-2">
            <div className="w-6 h-6 mx-auto bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-6 h-6 mr-3 mx-auto bg-gray-300 animate-pulse rounded-md"></div>
          </div>
          <div className="w-6 h-6 mx-auto bg-gray-300 animate-pulse rounded-md"></div>
        </div>
      </div>
      {data.map((res) => {
        return (
          <div className="border-b py-5">
            <div className="flex flex-row justify-between px-5">
              <div className="w-6 h-6  bg-gray-300 animate-pulse rounded-md"></div>
              <div className="flex flex-row gap-2">
                <div className="w-6 h-6 mx-auto bg-gray-300 animate-pulse rounded-md"></div>
                <div className="w-6 h-6 mx-auto bg-gray-300 animate-pulse rounded-md"></div>
              </div>
            </div>
            <div className=" w-30 mt-6  h-6  bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-30 h-6 mt-5  bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-10 h-6 mt-5  bg-gray-300 animate-pulse rounded-md"></div>
          </div>
        );
      })}
    </div>
  );
};

export default AyahsSkeleton;
