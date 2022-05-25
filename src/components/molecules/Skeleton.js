import React from "react";

const Skeleton = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      {arr.map((res) => {
        return (
          <div class="w-56 h-32 bg-white shadow-md  rounded-xl ">
            <div class="flex animate-pulse flex-col  h-full justify-center space-x-5">
              <div className="flex flex-row px-2 pb-3 justify-between">
                <div class="w-6 bg-gray-300 h-6 rounded-full "></div>
                <div class="w-6 bg-gray-300 h-6 rounded-full "></div>
              </div>
              <div class="flex flex-col space-y-3">
                <div class="w-36 bg-gray-300 h-4 rounded-md "></div>
                <div class="w-24 bg-gray-300 h-4 rounded-md "></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Skeleton;
