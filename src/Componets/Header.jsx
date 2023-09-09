import ReactIcons from "../Icons/react";
function Header() {
  return (
    <div>
      <header className="bg-[#001722] text-white flex flex-col md:flex-row flex-wrap gap-4 justify-between p-10 px-15 font-bold  item-center">
        <div className="text-2xl flex gap-4">
          <span className="bg-#f8fafc ">
            <ReactIcons />
          </span>
          <h1>Aseel</h1>
        </div>
        <div className="flex gap-4 text-1xl">
          <h4 className="text-lg ">Buy Good</h4>
          <h4>Do Good</h4>
          <h4>Contact:Raqeeb@aseelapp.com</h4>
        </div>
      </header>
    </div>
  );
}

export default Header;
