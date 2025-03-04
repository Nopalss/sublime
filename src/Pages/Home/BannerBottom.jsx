import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { FaCheckCircle } from "react-icons/fa";
import starIcon from "../../img/icon/star.png";
import sunIcon from "../../img/icon/sun.png";

const BannerBottom = () => {
  return (
    <Container>
      <div className="relative z-10 flex flex-row flex-wrap justify-between gap-10 mt-36">
        <div className="relative z-20 lg:max-w-2/5 left">
          <h2 className="text-6xl">
            Start your <br /> 7-day free trial
          </h2>
          <span className="flex flex-row gap-6 mt-6">
            <p>
              <FaCheckCircle className="inline mr-1" />
              Free 7-day trial
            </p>
            <p>
              <FaCheckCircle className="inline mr-1" />
              No credit card required
            </p>
          </span>
        </div>
        <div className="relative z-20 flex flex-col justify-end right">
          <span>
            <img src={starIcon} className="w-5 inline mr-2" />
            <img src={sunIcon} className="w-5 inline" />
          </span>
          <div className="flex flex-row gap-5 mt-6">
            <Button customClass="bg-black text-white">Learn More</Button>
            <span>
              <p>4.80/5</p>
              <p>From 300+ Customer Reviews</p>
            </span>
          </div>
        </div>
        <div className="absolute w-full h-full top-36 bottom-5 z-10 flex flex-row justify-center items-center">
          <div className="w-4/5 h-full bg-gradient-to-r from-[#46F883] to-[#FFDD00] opacity-56 blur-[50px] rounded-full border-b-2 border-black"></div>
        </div>
      </div>
    </Container>
  );
};

export default BannerBottom;
