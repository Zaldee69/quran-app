import React from "react";
import PlayIcon from "./assets/icons/PlayIcon";
import DocumentIcon from "./assets/icons/DocumentIcon";
import AdjusmentIcon from "./assets/icons/AdjusmentIcon";
import Button from "./molecules/Button";
import HeartIcon from "./assets/icons/HeartIcon";
import AyahsSkeleton from "./molecules/AyahsSkeleton";
import PrefferenceModal from "./molecules/PrefferenceModal";

const PrefferenceButton = () => {
  return (
    <div
      className="tooltip hover:bg-[#ECF0F3]  p-1 rounded-md"
      data-tip="Prefference"
    >
      <label
        for="my-modal-3"
        className={` transition duration-200 cursor-pointer   `}
      >
        <AdjusmentIcon />
      </label>
    </div>
  );
};

const Ayah = ({ data, isLoading }) => {
  return isLoading ? (
    <AyahsSkeleton />
  ) : (
    <>
      <div className="flex flex-col w-100 gap-3  	  justify-center bg-white ml-24 w-3/4  mt-32 rounded-2xl  wrap flex-wrap  p-6 shadow-sm">
        <h1 className="text-3xl font-bold font-poppins text-center">
          {data?.name}
        </h1>
        <span className="font-poppins text-center font-semibold">
          {`(${data?.translation})`}
        </span>
        <div className="flex flex-row justify-between py-5 border-b">
          <div className="flex flex-row items-center space-x-3">
            <span className="font-poppins font-semibold  text-sm">
              {data?.revelation}
            </span>
            <span className="font-poppins text-sm font-semibold"> | </span>
            <span className="font-poppins text-sm font-semibold">
              {data?.numberOfAyahs} Ayat
            </span>
            <span className="font-poppins text-sm font-semibold"> | </span>
            <span className="font-poppins text-sm font-semibold">
              Surat ke - {data?.number}
            </span>
          </div>
          <div className="flex flex-row gap-2 mr-5 ">
            <div className="flex flex-row border-r gap-2">
              <Button icon={<PlayIcon />} dataTip="Play Murotal" />
              <Button
                style="mr-2"
                icon={<DocumentIcon />}
                dataTip="Mode Simple"
              />
            </div>
            <PrefferenceButton />
            <PrefferenceModal />
          </div>
        </div>
        {data?.ayahs.map((res) => {
          return (
            <div className="border-b py-5">
              <div className="flex flex-row justify-between px-5">
                <span className="font-poppins font-semibold">
                  {res.number.inSurah}
                </span>
                <div className="flex flex-row gap-2">
                  <button className="hover:bg-[#ECF0F3] transition duration-200 p-1 rounded-md">
                    <PlayIcon />
                  </button>
                  <button className="hover:bg-[#ECF0F3] transition duration-200 p-1 rounded-md">
                    <HeartIcon />
                  </button>
                </div>
              </div>
              <span className="  px-5  rounded-full flex justify-end  py-2 w-100 text-4xl  mt-10 font-poppins">
                {res.arab}
              </span>
              <span className="  px-5  rounded-full flex justify-start py-2 w-100 text-md  mt-10 font-poppins">
                {res.translation}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Ayah;
