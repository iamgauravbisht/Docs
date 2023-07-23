import { Link } from "react-router-dom";

function RowCard({ title, description, img }) {
  const allColor = [
    "bg-[#1D5D9B]",
    "bg-[#F31559]",
    "bg-[#525FE1]",
    "bg-[#3AA6B9]",
    "bg-[#FFEA20]",
    "bg-[#D61355]",
    "bg-[#FFB100]",
    "bg-[#FF6D60]",
    "bg-[#FF8787]",
    "bg-[#B5C99A]",
    "bg-[#F9E2AF]",
    "bg-[#EB455F]",
    "bg-[#BAD7E9]",
  ];
  const randomIndex = Math.floor(Math.random() * 13);
  const bgColor = allColor[randomIndex];

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
