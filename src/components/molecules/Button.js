import React from "react";

const Button = ({ dataTip, icon, style }) => {
  return (
    <div className="tooltip" data-tip={dataTip}>
      <button
        className={`hover:bg-[#ECF0F3] transition duration-200 p-1 rounded-md ${style} `}
      >
        {icon}
      </button>
    </div>
  );
};

export default Button;
