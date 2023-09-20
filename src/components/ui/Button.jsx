/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ text, img, onClick }) => {
  return (
    <div>
      <div className="hidden lg:flex">
        <button
          className="flex h-[50px] w-[170px] items-center justify-between rounded-[7px] border-[1px] bg-black hover:bg-white p-[25px]"
          onClick={onClick}
        >
          <img src={img} alt="" />
          <span className="text-[12px]  font-bold hover:text-black transition">{text}</span>
        </button>
      </div>
      <div className="flex lg:hidden">
        <button
          className="flex h-[44px] min-w-[145px] items-center rounded-[7px] border-[1px] bg-black px-4 py-[20px]"
          onClick={onClick}
        >
          <img src={img} alt="" />
          <span className="ml-3 text-[12px] font-bold sm:ml-4">{text}</span>
        </button>
      </div>
    </div>
  );
};

export default Button;
