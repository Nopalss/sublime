import React from "react";
import plusIcon from "../../img/icon/plus.png";
import sunIcon from "../../img/icon/sun.png";
import block from "../../img/icon/block.png";
import block2 from "../../img/icon/block2.png";
import circles from "../../img/icon/circles.png";
import star2 from "../../img/icon/star2.png";
import dashboard from "../../img/dashboard.png";

const Benefit = () => {
  return (
    <div className="bg-white lg:py-30 pb-20 ">
      <div className="w-full flex flex-col justify-center items-center relative pt-30 pb-5 top">
        <div className="flex flex-col gap-10 justify-center items-center lg:w-[520px] lg:h-[306.38px] text-center">
          <div className="flex gap-7">
            <img src={plusIcon} alt="" className="w-[20px] h-[20px]" />
            <img src={sunIcon} alt="" className="w-[20px] h-[20px]" />
          </div>
          <h1 className="text-5xl leading-normal">
            Power your business with Sublime
          </h1>
          <p className="leading-relaxed">
            Sublime seamlessly integrates with your existing infrastructure,
            <br />
            allowing you to effortlessly connect and consolidate data from
            various sources.
          </p>
        </div>
        <div className="w-full h-[200px] absolute top-0 bg-gradient-to-r from-[#46F883] to-[#FFDD00] opacity-60 blur-[80px] "></div>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-3 xl:gap-0 gap-10 sm:px-10 lg:px-30 py-10 justify-center left">
        <div className="flex flex-row xl:flex-col gap-16  w-full  justify-center items-center ">
          <div className="flex flex-col gap-5 w-1/2  xl:w-[270px] ">
            <img src={star2} alt="" className="w-[48px] h-[48px]" />
            <h1 className="text-2xl">Increased Efficiency</h1>
            <p className="text-sm">
              Our workflows are streamlined, optimised and built to perform.
            </p>
          </div>
          <div className=" flex flex-col gap-5 w-1/2  xl:w-[270px]">
            <img src={block} alt="" className="w-[48px] h-[48px] z-20" />
            <h1 className="text-2xl">Great Communication</h1>
            <p className="text-sm">
              We're here for you at any time of the day and would love to hear
              from you.
            </p>
          </div>
        </div>
        <div className="xl:w-[430px] w-full flex justify-center  xl:justify-start relative">
          <img src={dashboard} alt="" className="w-[430px] z-20" />
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-[#46F883] to-[#FFDD00] opacity-40 blur-[100px] top-0"></div>
        </div>
        <div className="flex flex-row xl:flex-col gap-16  justify-center items-center">
          <div className="  flex flex-col gap-5  w-1/2">
            <img src={block2} alt="" className="w-[48px] h-[48px]" />
            <h1 className="text-2xl">Simple Systems</h1>
            <p className="text-sm">
              Sublime is easy to use and even easy to integrate with existing
              systems.
            </p>
          </div>
          <div className=" flex flex-col gap-5 w-1/2">
            <img src={circles} alt="" className="w-[48px] h-[48px]" />
            <h1 className="text-2xl">Easily Customized</h1>
            <p className="text-sm">
              Need a more custom solution? Done - let's chat about it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
