import React from "react";
import iconImage from "../../img/image3.png";
import imageOverview from "../../img/image4.png";
import profileIcon from "../../img/profileIcon.png";
import { BsArrowRight } from "react-icons/bs";

const Overview2 = () => {
  return (
    <div className="my-48 flex flex-row flex-wrap justify-between gap-10 md:px-10 lg:px-20">
      <div className="flex flex-col justify-end order-last lg:w-1/2 lg:order-first relative">
        <img
          src={imageOverview}
          alt="icon"
          className="relative w-100 z-20 bg-transparent self-center"
        />
        <div className="absolute w-full h-full top-5 bottom-5 z-10 bg-gradient-to-r from-[#46F883] to-[#FFDD00] opacity-36 blur-[50px] rounded-full"></div>
      </div>
      <div className="flex flex-col gap-5 order-first lg:w-2/5 lg:order-last">
        <img src={iconImage} alt="icon" className="w-20" />
        <h3 className="text-4xl">Provide powerful solutions at all times.</h3>
        <div className="relative">
          <div className="relative z-20 flex flex-col gap-6 p-5 bg-white border-2 border-gray-200 rounded-t-xl rounded-bl-xl">
            <p className="italic">
              "Sublime took our business to the next level. It provided the
              solution we were hunting for at an affordable price and was easy
              to integrate."
            </p>
            <div className="flex flex-row gap-3 items-center">
              <img src={profileIcon} alt="Icon Profile" className="w-15" />
              <span>
                <p className="font-semibold">Sarah Smith</p>
                <p className="text-sm text-gray-500">
                  Marketing Leader @Mailchimp
                </p>
              </span>
            </div>
          </div>
          <div className="absolute z-10 -bottom-10 right-0 flex flex-row items-end">
            <button className="relative px-4 py-2 border-2 border-gray-200 rounded-bl-xl">
              <BsArrowRight className="inline text-lg" />
            </button>
            <span className="rounded-br-full bg-gray-200 w-[3rem] h-[3rem] block"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview2;
