import React from "react";
import Input from "./input";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col bg-white ms-3 me-3 h-3/5 w-11/12  rounded-t-3xl rounded-bl-3xl rounded-br-[7rem] md:w-2/4 ">
      <div className="flex justify-start p-5 mt-10 ms-5 me-5 gap-x-5 ">
        <Input />
        <Input />
        <Input />
      </div>
      <hr className="m-6" />
      <div className="flex justify-center md:justify-end md:me-[30px]">
        <Image
          src="/images/icon-arrow.svg"
          width={70}
          height={50}
          className="bg-violet-500 rounded-full p-3 -mt-[55px]"
        />
      </div>
    </div>
  );
};

export default Hero;
