import menulogo from "../assets/menu.svg";
import docslogo from "../assets/docs.svg";
import searchlogo from "../assets/search.svg";
import accountlogo from "../assets/account.svg";

function Header() {
  return (
    <header className="w-full">
      <nav className="  flex justify-between items-center py-3 sticky ">
        <div className="flex gap-3">
          <img src={menulogo} alt="menu" className="cursor-pointer" />
          <div className="brand flex items-center justify-center gap-3 cursor-pointer">
            <img src={docslogo} alt="menu" />
            <h3>GauravDocs</h3>
          </div>
        </div>

        <div
          className=" absolute left-1/2 -translate-x-1/2
        flex border border-black  rounded-lg px-2 w-1/2"
        >
          <input type="text" className="outline-none w-full p-1" />
          <img src={searchlogo} alt="" />
        </div>

        <div>
          <img src={accountlogo} alt="" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
