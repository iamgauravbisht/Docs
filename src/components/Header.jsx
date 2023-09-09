import menulogo from "../assets/menu.svg";
import docslogo from "../assets/docs.svg";
import searchlogo from "../assets/search.svg";
import accountlogo from "../assets/account.svg";

function Header() {
  const logedIn = false;

  return (
    <header className="w-full px-5">
      <nav className="flex justify-between items-center py-3  md:flex-row md:relative">
        <div className="flex gap-3">
          <img src={menulogo} alt="menu" className="cursor-pointer" />
          <div className="brand flex items-center justify-center gap-3 cursor-pointer">
            <img src={docslogo} alt="menu" />
            <h3>GauravDocs</h3>
          </div>
        </div>

        <div
          className=" 
         hidden border border-black  rounded-lg px-2  
        md:flex  lg:absolute lg:left-1/2 lg:-translate-x-1/2 md:w-1/2
        "
        >
          <input type="text" className="outline-none w-full p-1" />
          <img src={searchlogo} alt="" />
        </div>
        {logedIn ? (
          <div>
            <img src={accountlogo} alt="" />
          </div>
        ) : (
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Log out
            </button>
          </div>
        )}
      </nav>

      <div
        className=" 
        flex border border-black  rounded-lg px-2 w-full mt-3 
        md:hidden 
        "
      >
        <input type="text" className="outline-none w-full p-1" />
        <img src={searchlogo} alt="" />
      </div>
    </header>
  );
}

export default Header;
