
import { MdSearch } from "react-icons/md";

const NavBar   = () => {

  return (
    <nav className="fixed top-0 z-10 mb-10 flex w-full items-center shadow-md justify-between bg-white bg-opacity-30 px-6 py-4 backdrop-blur-lg backdrop-filter">
    <div className=" w-[131px]">
    
        <h2 className="text-black-400">LOGO</h2>
      </div>
      
          <div className="relative flex justify-start items-center">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdSearch className="h-[18px] w-[18px] text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full sm:w-[500px] h-[34px] pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
    </nav>
  );
};

export default NavBar;
