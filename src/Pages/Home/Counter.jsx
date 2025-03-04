import React from "react";

const Counter = () => {
  const dummyData = [
    {
      id: 1,
      value: "24K",
      label: "Trusted Reviews",
    },
    {
      id: 2,
      value: "96%",
      label: "Customer Satisfaction",
    },
    {
      id: 3,
      value: "32K",
      label: "Expenses Saved",
    },
  ];

  return (
    <div className="mt-56 border-y-2 bottom border-gray-200  p-10 flex flex-row flex-wrap gap-4 justify-between">
      <span className="max-w-2/5">
        <p className="text-4xl">15.000+ happy customers.</p>
        <p className="text-gray-400 mt-3">
          Using Sublime everyday and loving it!
        </p>
      </span>
      {dummyData.map((data) => (
        <span key={data.id} className="text-center">
          <p className="text-6xl">{data.value}</p>
          <p className="text-gray-400 mt-3 uppercase">{data.label}</p>
        </span>
      ))}
    </div>
  );
};

export default Counter;
