import React from "react";

const SelectGroup = ({ title, data }) => {
  return (
    <div className="mb-5 font-poppins  ">
      <span className="font-semibold ">{title}</span>
      <select class="select w-full mt-2 select-bordered max-w-xs">
        <option disabled selected>
          Pick your favorite Simpson
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
    </div>
  );
};

const Modal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div style={{ visibility: "visible" }} class="modal">
        <div class="modal-box max-w-sm relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg border-b pb-2 font-bold">Prefferensi</h3>
          <form className="mt-5">
            <SelectGroup title={"Qari"} />
            <SelectGroup title={"Tafsir"} />
            <div className="flex flex-row gap-5 font-poppins">
              <div className="flex gap-3 flex-row items-center">
                <label className="font-semibold">Tafsir</label>
                <input className="checkbox" type="checkbox" />
              </div>
              <div className="flex flex-row gap-3 items-center">
                <label className="font-semibold">Terjemah</label>
                <input className="checkbox" type="checkbox" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
