import { FaFacebook, FaTelegram, FaPinterest } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { RiInstagramFill, RiMenuLine } from "react-icons/ri";
import Button from "../components/Button";

export default function Navbar() {
  return (
    <>
      <div className="bg-black text-white flex flex-row flex-wrap gap-3 justify-between items-center px-20 py-2">
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
      <div className="bg-white px-20 py-5 text-black flex flex-row justify-between items-center">
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
          <Button customClass="bg-black text-white hover:bg-gray-700">Sign Up for free</Button>
        </span>
        <span className="block md:hidden text-2xl">
          <a>
            <RiMenuLine />
          </a>
        </span>
      </div>
    </>
  );
}
