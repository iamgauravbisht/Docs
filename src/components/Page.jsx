import { useState, useRef, useEffect } from "react";
import threedotslogo from "../assets/threedots.svg";
import Row from "./Row";

function Page() {
  const [showOption, setShowOption] = useState(false);
  const optionRef = useRef(null);

  const handleClickOutside = (event) => {
    if (optionRef.current && !optionRef.current.contains(event.target)) {
      setShowOption(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex justify-center ">
      <div className="w-full  max-w-xl  lg:max-w-4xl ">
        <div className="flex flex-row justify-between items-center py-6 px-2">
          <p>Start a new document</p>

          <div className="relative">
            <div
              className="hover:bg-blue-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              ref={optionRef}
              onClick={() => setShowOption(!showOption)}
            >
              <img src={threedotslogo} alt="" />
            </div>
            {showOption ? (
              <div className="absolute -translate-x-1/2 rounded-lg bg-white px-5 shadow-md shadow-gray-600 z-10">
                <button className="bg-white ">Hide all templates</button>
              </div>
            ) : null}
          </div>
        </div>
        <Row />
      </div>
    </div>
  );
}

export default Page;
