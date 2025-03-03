import React from "react";
import sunIcon from "../../img/icon/sun.png";
import starIcon from "../../img/icon/star.png";
import Button from "../../components/Button";
import berlian from "../../img/thumbnail/berlian.png";
import berlian2 from "../../img/thumbnail/berlian2.png";
import gelang from "../../img/thumbnail/gelang.png";

const blogData = [
  {
    img: berlian,
    date: "January 12, 2023",
    title: "How to Create an Effective Design Portfolio",
    paragraph:
      "Experience the sublime in SaaS. Join countless satisfied customers who have chosen Sublime as their go-to SaaS platform",
  },
  {
    img: berlian2,
    date: "January 12, 2023",
    title: "Building a Navigation Component with Variables",
    paragraph:
      "Experience the sublime in SaaS. Join countless satisfied customers who have chosen Sublime as their go-to SaaS platform",
  },
  {
    img: gelang,
    date: "January 12, 2023",
    title: "How Can Designers Prepare for the Future?",
    paragraph:
      "Experience the sublime in SaaS. Join countless satisfied customers who have chosen Sublime as their go-to SaaS platform",
  },
];

const Blog = () => {
  return (
    <div className="py-10 px-20 pt-20 flex flex-col gap-14">
      <div className="flex justify-between items-end z-20">
        <div className="w-[350px]">
          <h1 className="text-6xl">Most Popular Blog</h1>
        </div>
        <div className="flex flex-col w-[380px] gap-7 ">
          <div className="flex gap-6">
            <img src={starIcon} alt="" className="w-[20px] h-[20px]" />
            <img src={sunIcon} alt="" className="w-[20px] h-[20px]" />
          </div>
          <p className="">
            Learn from our experts in multiple fields of business that will help
            your team grow.
          </p>
        </div>
        <div className="place-self-end">
          <Button
            type="submit"
            customClass="bg-black text-white hover:bg-gray-800 cursor-pointer transition ease duration-200"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 flex-wrap relative ">
        {blogData.map((data, index) => {
          return (
            <div
              key={index}
              className="w-[366px] h-[520.38px] p-3   flex flex-col gap-4 bg-white shadow-lg z-10 rounded-xl"
            >
              <img src={data.img} alt="" className="mb-1" />
              <div className=" flex flex-col gap-4 px-4">
                <p className="font-semibold text-gray-500">{data.date}</p>
                <h1 className="text-2xl">{data.title}</h1>
                <p className="text-gray-500 text-justify">{data.paragraph}</p>
              </div>
            </div>
          );
        })}
        <div className="absolute w-[800px] h-full bg-gradient-to-r from-[#46f88493] to-[#ffdd00a0] opacity-100 blur-[200px] "></div>
      </div>
    </div>
  );
};

export default Blog;
