import React from "react";
import profile1 from "../../img/profile/profile1.png";
import profile2 from "../../img/profile/profile2.png";
import profile3 from "../../img/profile/profile3.png";
import star from "../../img/icon/star.png";
import plus from "../../img/icon/plus.png";
import sun from "../../img/icon/sun.png";
import cs from "../../img/icon/cs.png";
import earth from "../../img/icon/earth.png";
import warning from "../../img/icon/warning.png";
const profileImage = [profile1, profile2, profile3];
const logo = [plus, star, sun];
const ourService = [
  {
    icon: cs,
    heading: "Our team shares values of success",
    paragraph:
      "At Sublime, our team is focussed on working with you to achieve success.",
  },
  {
    icon: earth,
    heading: "We’re on a mission to power our customers",
    paragraph:
      "Whatever your business needs, we're here for you and want to help.",
  },
  {
    icon: warning,
    heading: "We’re here to protect your data online",
    paragraph:
      "You can trust in our world class data protection methods and processes. ",
  },
];
const CustomerSupport = () => {
  return (
    <div className="px-30">
      <div className="flex justify-between">
        {/* image and tulisan */}
        <div className=" flex items-center gap-15">
          <div className="flex space-x-[-20px]">
            {profileImage.map((profile, index) => {
              return (
                <img
                  src={profile}
                  className="w-[96px] h-[96px] "
                  alt=""
                  key={index}
                />
              );
            })}
          </div>
          <div>
            <h1 className="text-5xl font-normal">
              Powerful <br /> Customer Support
            </h1>
          </div>
        </div>
        {/* logo */}
        <div className="flex  gap-5 items-end">
          {logo.map((logo, index) => {
            return <img src={logo} className="w-[20px] h-[20px]" />;
          })}
        </div>
      </div>
      {/* our servis */}
      <OurSupport />
    </div>
  );
};

const OurSupport = () => {
  return (
    <div className="relative">
      <div className=" relative grid grid-cols-3 gap-7 mt-20 z-20 ">
        {ourService.map((data, index) => {
          return (
            <div
              key={index}
              className="bg-white p-10 w-[376px] h-[297.19px] rounded-2xl shadow flex flex-col justify-center gap-5 items-center text-center"
            >
              <img src={data.icon} alt="" className="w-[48px] h-[48px]" />
              <h1 className="text-2xl">{data.heading}</h1>
              <p>{data.paragraph}</p>
            </div>
          );
        })}
      </div>
      <div className="absolute w-full h-full top-0 left-30 right-30 bg-gradient-to-r from-[#FFDD00] to-[#46F883] opacity-56 blur-[100px]"></div>
    </div>
  );
};
export default CustomerSupport;
