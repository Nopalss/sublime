import React from "react";

const Container = ({ children }) => {
  return <div className="px-5 py-[1em] md:px-10 md:py-[1.5em] lg:px-20 md:py[2em] flex flex-col">{children}</div>;
};

export default Container;
