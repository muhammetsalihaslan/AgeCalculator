import React from "react";
import Input from "./input";

const Hero = () => {
  return (
    <div className="bg-white w-screen ms-3 me-3 h-3/5 -mt-[5rem] rounded-t-3xl rounded-bl-3xl rounded-br-[7rem]">
      <div className="flex ">
        <Input />
        <Input />
        <Input />
      </div>
      <div>hello</div>
    </div>
  );
};

export default Hero;
