import Row from "./Row";
import threedotslogo from "../assets/threedots.svg";

function Page() {
  const optionsHandler = () => {
    // change the color of threedots background
  };

  return (
    <div className="w-full flex justify-center mt-5">
      <div className="w-fit ">
        <div className="flex flex-row justify-between items-center py-6 px-2">
          <p>Start a new document</p>

          <div className="relative">
            <div className="bg-gray-600 w-10 h-10 rounded-full flex justify-center items-center">
              <img src={threedotslogo} alt="" className="cursor-pointer" />
            </div>
            {/* <div className="absolute top-0 border border-black px-5 rounded-lg">
              <div>hello</div>
            </div> */}
          </div>
        </div>

        <Row />
      </div>
    </div>
  );
}

export default Page;
