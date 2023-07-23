import React, { useState, useEffect } from "react";

function Untitled() {
  const [elements, setElements] = useState([]);
  const [textValue, setTextValue] = useState("");

  const appendElement = (tag, value) => {
    const newElement = React.createElement(tag, null, value);
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const handleSubmit = () => {
    appendElement("p", textValue);
    setTextValue("");
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen px-5">
      <div className="w-[800px] py-10">
        <div className="shadow-md shadow-black w-full  p-8">
          <div>
            {elements.map((element, index) => (
              <div key={index}>{element}</div>
            ))}
          </div>

          <div className="m-10  ">
            <div>
              <button className="m-1 border border-black px-2 py-1 rounded-md cursor-pointer hover:bg-black hover:text-white ">
                B
              </button>
              <button className="m-1 border border-black px-2 py-1 rounded-md cursor-pointer hover:bg-black hover:text-white ">
                U
              </button>
              <button className="m-1 border border-black px-2 py-1 rounded-md cursor-pointer hover:bg-black hover:text-white ">
                I
              </button>
              <button className="m-1 border border-black px-2 py-1 rounded-md cursor-pointer hover:bg-black hover:text-white ">
                Size
              </button>
              <button
                className="m-1 border border-black px-2 py-1 rounded-md cursor-pointer hover:bg-black hover:text-white "
                onClick={() => appendElement("p", textValue)}
              >
                p
              </button>
              <button
                className="m-1 border border-black px-2 py-1 rounded-md cursor-pointer hover:bg-black hover:text-white "
                onClick={() => appendElement("h1", textValue)}
              >
                H1
              </button>
              <button className="m-1 border border-black px-2 py-1 rounded-md cursor-pointer hover:bg-black hover:text-white ">
                H2
              </button>
            </div>
            <div className="flex border border-blue-500 shadow-md shadow-blue-500 ">
              <input
                type="text"
                key="inputBox"
                className="w-full outline-none px-3 py-1"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
              />
              <button className="px-2 py-1" onClick={handleSubmit}>
                send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Untitled;
