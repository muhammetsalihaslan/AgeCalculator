import React from "react";

const Input = ({ time, ts }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label
        htmlFor=""
        className="text-sm md:text-base font-bold ms-1 invalid:text-red-500   "
      >
        {time}
      </label>
      <input
        type="number"
        placeholder="DD"
        className="appearance-none focus-outline-none w-[90px] h-[3rem] md:h-[4rem] md:w-[140px] rounded-lg border text-md md:text-xl font-semibold text-slate-500 border-slate-300 p-4 outline-none invalid:border-red-500 invalid:text-red-500 "
        required
      />
    </div>
  );
};

export default Input;
