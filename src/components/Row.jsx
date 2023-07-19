import RowCard from "./RowCard";
import pluslogo from "../assets/plus.svg";

function Row() {
  return (
    <div className="w-full flex border border-black">
      <div className="flex flex-col gap-2 m-1">
        <div className="w-32 h-44 border border-gray-400 p-2 cursor-pointer">
          <img src={pluslogo} alt="pluslogo" className="w-full h-full" />
        </div>
        <small className="font-semibold">Blank</small>
      </div>

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
