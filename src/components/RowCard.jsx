import { Link } from "react-router-dom";

function RowCard({ bgColor, title, description, img }) {
  return (
    <div
      className={`flex w-full items-center  ${bgColor} gap-2 m-1 rounded-xl px-5
       lg:h-44 lg:flex-col lg:p-2 lg:m-0 lg:mr-1 lg:justify-center 
    `}
    >
      <div
        className="w-12 h-12 flex items-center justify-center cursor-pointer
      lg:w-full lg:h-20
      "
      >
        <Link
          to="/New-Page"
          className="text-black w-full flex justify-center items-center "
        >
          <img
            src={img}
            alt="docFirstpage"
            className="w-6 h-6 lg:w-full lg:h-full"
          />
        </Link>
      </div>
      <div className="flex flex-col w-full justify-center lg:gap-1 ">
        <Link
          to="/New-Page"
          className=" w-full flex flex-col text-black justify-center lg:gap-1 "
        >
          <p className="font-semibold ">{title}hi</p>
          <small className="font-semibold text-gray-400">
            {description} hello
          </small>
        </Link>
      </div>
    </div>
  );
}

export default RowCard;
