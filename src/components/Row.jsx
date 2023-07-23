import RowCard from "./RowCard";
import pluslogo from "../assets/plus.svg";
import { Link } from "react-router-dom";

function Row() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center 
    lg:flex-row
    "
    >
      <div
        className="flex w-full items-center bg-[#525FE1] gap-2 m-1 rounded-xl px-5
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
      {/* <div className="flex flex-col gap-2 m-1">
        <Link to="/New-Page" className="text-black ">
          <div className="w-32 h-44 border border-gray-400 p-2 cursor-pointer">
            <img src={pluslogo} alt="pluslogo" className="w-full h-full" />
          </div>
          <small className="font-semibold">Blank</small>
        </Link>
      </div> */}

      {/* <RowCard title={} description={} img={} /> */}
      <RowCard />
      <RowCard />
      <RowCard />
      <RowCard />
      <RowCard />
    </div>
  );
}

export default Row;
