import { motion } from "framer-motion";
import iconStar from "../../img/icon/star.png";
import iconSun from "../../img/icon/sun.png";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaLine,
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";
import { useState } from "react";

const marqueeItems = [
  <FaLinkedin />,
  <FaInstagram />,
  <FaFacebook />,
  <FaLine />,
  <FaTwitter />,
  <FaDiscord />,
  <FaGithub />,
  <FaTiktok />,
];

const Marquee = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-20">
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-gray-600">SUBLIME PRODUCTS</p>
          <h1 className="text-6xl">
            Provide powerful <br /> solutions at all times.
          </h1>
        </div>
        <div className="flex flex-col gap-8 w-[510px] justify-center">
          <div className="flex gap-5">
            <img src={iconStar} alt="" className="w-[20px] h-[20px]" />
            <img src={iconSun} alt="" className="w-[20px] h-[20px]" />
          </div>
          <p>
            Use Sublime to streamline your processes, save time and effort and
            increase your sales exponentially.{" "}
          </p>
        </div>
      </div>
      <MarqueeSlider />
    </div>
  );
};

const MarqueeSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="px-20 py-18 relative">
      <div className="w-full overflow-hidden p-5 flex flex-col gap-5 z-20">
        <motion.div
          className="flex space-x-8 "
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          drag="x"
          dragConstraints={{ left: -300, right: 300 }}
          onHoverEnd={() => setIsPaused(false)}
        >
          {marqueeItems.concat(marqueeItems).map((logo, index) => (
            <div
              className="w-[330px] h-[200px] p-[2em] bg-white shadow-lg rounded-lg flex flex-col gap-4"
              key={index}
            >
              <p className="text-3xl ">{logo}</p>
              <div>
                <div className="w-[200px] h-[30px] bg-gray-100 rounded-lg mb-2"></div>
                <div className="w-[250px] h-[70px] bg-gray-100 rounded-lg"></div>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex space-x-8 "
          animate={isPaused ? {} : { x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          drag="x"
          dragConstraints={{ left: -300, right: 300 }}
          onHoverEnd={() => setIsPaused(false)}
        >
          {marqueeItems.concat(marqueeItems).map((logo, index) => (
            <div
              className="w-[330px] h-[200px] p-[2em] bg-white shadow-lg rounded-lg flex flex-col gap-4"
              key={index}
            >
              <p className="text-3xl ">{logo}</p>
              <div>
                <div className="w-[200px] h-[30px] bg-gray-100 rounded-lg mb-2"></div>
                <div className="w-[250px] h-[70px] bg-gray-100 rounded-lg"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-[#46F883] to-[#FFDD00] opacity-60 blur-[100px] left-10 right-10 top-0"></div>
    </div>
  );
};

export default Marquee;
