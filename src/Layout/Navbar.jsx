import { FaFacebook, FaTelegram, FaPinterest } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { RiInstagramFill, RiMenuLine } from "react-icons/ri";
import Button from "../components/Button";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handlerNavMobile = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="bg-black text-white flex flex-row flex-wrap gap-3 justify-between items-center sm:px-20 py-2 z-50000">
        <p className="text-sm">
          The banner is to inform visitors of an important message
        </p>
        <span className="flex flex-row gap-3">
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaPinterest />
          </a>
          <a>
            <RiInstagramFill />
          </a>
          <a>
            <FaTelegram />
          </a>
        </span>
      </div>
      <div className="bg-white px-2 sm:px-20 py-5 text-black flex flex-row justify-between items-center ">
        <span className="flex flex-row gap-3 items-center">
          <h1 className="text-3xl font-bold">Sublime</h1>
          <BsStars className="text-2xl" />
        </span>
        <nav className="hidden md:flex flex-row md:gap-4 lg:gap-6">
          <a className="cursor-pointer transition hover:text-black text-gray-600 font-medium duration-200 ease-in-out">
            Home
          </a>
          <a className="cursor-pointer transition hover:text-black text-gray-600 font-medium duration-200 ease-in-out">
            Company
          </a>
          <a className="cursor-pointer transition hover:text-black text-gray-600 font-medium duration-200 ease-in-out">
            Pricing
          </a>
          <a className="cursor-pointer transition hover:text-black text-gray-600 font-medium duration-200 ease-in-out">
            Blog
          </a>
          <a className="cursor-pointer transition hover:text-black text-gray-600 font-medium duration-200 ease-in-out">
            Contact
          </a>
        </nav>
        <span className="hidden md:flex flex-row gap-5 items-center">
          <a>Sign In</a>
          <Button customClass="bg-black text-white hover:bg-gray-700">
            Sign Up for free
          </Button>
        </span>
        <span className="block md:hidden text-2xl" onClick={handlerNavMobile}>
          <a>
            <RiMenuLine />
          </a>
        </span>
      </div>
      {/* navbar mobile */}
      <div
        className={`w-full transform ${
          isOpen ? "translate-x-0" : "translate-x-full hidden "
        } transition-all duration-300 ease-in-out absolute h-[380px] z-100 bg-[#000000ae] flex flex-col md:hidden`}
      >
        <div className="flex flex-col py-7 gap-6 justify-start items-center w-full text-xl">
          <a className="cursor-pointer transition hover:text-black text-gray-100 font-medium duration-200 ease-in-out">
            Home
          </a>
          <a className="cursor-pointer transition hover:text-gray-400 text-gray-100 font-medium duration-200 ease-in-out">
            Company
          </a>
          <a className="cursor-pointer transition hover:text-gray-400 text-gray-100 font-medium duration-200 ease-in-out">
            Pricing
          </a>
          <a className="cursor-pointer transition hover:text-gray-400 text-gray-100 font-medium duration-200 ease-in-out">
            Blog
          </a>
          <a className="cursor-pointer transition hover:text-gray-400 text-gray-100 font-medium duration-200 ease-in-out">
            Contact
          </a>
        </div>
        <div className="flex justify-evenly items-center">
          <a className="font-semibold cursor-pointer bg-white rounded-full py-2 px-3 hover:bg-gray-700  text-black hover:text-gray-400 duration-150 transition ease">
            Sign In
          </a>
          <Button customClass="bg-black text-white hover:bg-gray-700">
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}
