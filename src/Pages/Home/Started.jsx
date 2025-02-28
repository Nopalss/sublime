import React from "react";
import Container from "../../components/Container";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Button";
import page from "../../img/pages.png";

const Started = () => {
  return (
    <div className="flex flex-row">
      <TextStarted />
      <ImageStarted />
    </div>
  );
};

const TextStarted = () => {
  return (
    <div className="flex flex-col gap-6 w-2/5 mt-[4em]">
      <p className="text-lg text-gray-400">55,000+ trusted Businesses</p>
      <h1 className="text-7xl">Build your next project faster.</h1>
      <p className="text-base text-gray-500">
        Use Sublime to streamline your processes, save time and effort and
        increase your sales exponentially.{" "}
      </p>
      <div className="flex w-full justify-between py-2 px-1 border border-gray-200  rounded-full">
        <input
          type="text"
          className="outline-none px-2 w-3/5"
          placeholder="Enter your mail address"
        />
        <Button>Get Started</Button>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex items-center gap-2">
          <FaCheckCircle />
          On Demand Support
        </p>
        <p className="flex gap-2 items-center">
          <FaCheckCircle />
          Seamless Cloud Technology
        </p>
      </div>
    </div>
  );
};

const ImageStarted = () => {
  return (
    <div className="w-3/5 relative">
      <div className="absolute top-[10em] bg-gradient-to-r w-full h-[344px] from-[#FFDD00] to-[#46F883] opacity-56 blur-[99px]"></div>
      <img src={page} alt="" className="absolute -right-20 z-10 top-0" />
    </div>
  );
};
/* Gradient+Blur */

export default Started;
