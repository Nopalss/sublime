import { FaFacebook, FaTelegram, FaPinterest } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Button from "../components/Button";

export default function Navbar() {
  return (
    <>
    <div className="bg-black text-white flex flex-row flex-wrap gap-3 justify-between items-center px-12 py-2">
      <p className="text-sm">The banner is to inform visitors of an important message</p>
      <span className="flex flex-row gap-3">
        <a><FaFacebook /></a>
        <a><FaPinterest /></a>
        <a><RiInstagramFill /></a>
        <a><FaTelegram /></a>
      </span>
    </div>
    <div className="bg-white px-12 py-3 text-black flex flex-row justify-between items-center">
      <h1 className="text-3xl font-bold">Sublime</h1>
      <nav className="hidden md:flex flex-row gap-6">
        <a>Home</a>
        <a>Company</a>
        <a>Pricing</a>
        <a>Blog</a>
        <a>Contact</a>
      </nav>
      <span className="hidden md:flex flex-row gap-5 items-center">
        <a>Sign In</a>
        <Button>Sign Up for free</Button>
      </span>
    </div>
    </>
  );
}