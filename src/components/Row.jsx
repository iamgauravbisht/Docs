import React from "react";
import RowCard from "./RowCard";
import pluslogo from "../assets/plus.svg";
import { Link } from "react-router-dom";

const Row = React.memo(function MyRow() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center 
    lg:flex-row
    "
    >
      <div
        className="flex w-full items-center bg-[#800080] gap-2 m-1 rounded-xl px-5
          lg:h-44 lg:mr-1 lg:flex-col lg:justify-center lg:p-0
        "
      >
        <div className="w-12 h-12 flex items-center justify-center cursor-pointer">
          <Link
            to="/New-Page"
            className="text-black w-full flex justify-center items-center "
          >
            <img src={pluslogo} alt="pluslogo" className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/New-Page" className="text-black w-full ">
            <p className="font-semibold hover:text-white ">Blank Doc</p>
          </Link>
        </div>
      </div>

      <RowCard bgColor={` bg-[#FF0000]`} />
      <RowCard bgColor={` bg-[#0000FF]`} />
      <RowCard bgColor={` bg-[#00FF00]`} />
      <RowCard bgColor={` bg-[#FFFF00]`} />
      <RowCard bgColor={` bg-[#FFA500]`} />
    </div>
  );
});

export default Row;
