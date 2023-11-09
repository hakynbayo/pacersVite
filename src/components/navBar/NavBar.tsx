import { useState } from "react";

// Import any necessary dependencies like useMediaQuery, GenModal, Link, and navbarItems
import useMediaQuery from "../../hooks/useMediaQuery";
import Menu from "../../assets/menu.svg";
import Search from "../../assets/Search field.svg";
import GenModal from "../modal"; // Replace with your path
import { navbarItems } from "../../constants/data"; // Replace with your path
import { Link } from "react-router-dom";

const NavBar = ({ isHome }: { isHome?: boolean }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  if (isMobile) {
    return (
      <>
        <div className="mb-6 flex w-full items-center justify-between px-6">
          <div className="relative h-[34px] w-[80px]">
          <Link to="/Dashboard">
            <h4>LOGO</h4>
            </Link>
          </div>
          <div className="relative h-[24px] w-[24px]">
            <img
              src={Menu}
              className="object-contain"
              alt="logo"
              onClick={toggleModal}
            />
          </div>
        </div>
        <GenModal isOpen={open} handleCloseModal={toggleModal}>
          <div className="relative h-[56px] w-[131px]">
          <Link to="/Dashboard">
            <h4>LOGO</h4>
            </Link>
          </div>
          <div className="item-center mt-10 gap-10">
            {navbarItems.map((item, index) => (
              <Link key={index} to={item.link}>
                <p className="font-dm-sans mb-10 text-[20px] font-[500]">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>

          <div>
            <Link to="/Dashboard">
              <button
                type="button"
                className="h-[46px] w-full rounded-[40px] text-blue-600 border border-blue-600"
              >
                Login
              </button>
            </Link>
            <button
              type="button"
              className="mt-6 h-[46px] w-full rounded-[40px]"
            >
              Sign up
            </button>
          </div>
        </GenModal>
      </>
    );
  }

  return (
    <nav className="fixed top-0 z-10 mb-10 flex flex-wrap w-full items-center justify-between bg-white bg-opacity-30 px-6 py-4 backdrop-blur-lg backdrop-filter sm:px-10 lg:px-16 xl:px-16">
      <div className=" w-[131px]">
        <h4 className="text-gray-400">LOGO</h4>
      </div>
      {isHome && (
        <div className="flex items-center gap-8">
          {navbarItems.map((item, index) => (
            <Link key={index} to={item.link}>
              <p className="font-dm-sans font-[500]">{item.text}</p>
            </Link>
          ))}
          <div className="relative h-[24px] w-[30px]">
            <img src={Search} className="object-contain" alt="logo" />
          </div>
          <div>
            <Link to="/Dashboard">
              <button
                type="button"
                className="h-[46px] w-[119px] rounded-[40px] text-blue-600 border border-blue-600"
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                type="button"
                className="ml-6 h-[46px] w-[119px] rounded-[40px] bg-blue-600 text-white"
              >
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
