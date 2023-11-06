import React from "react";

const Input = ({ time, ts }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor="" className="text-2xl font-bold text-slate-500">
        DAY
      </label>
      <input
        type="date"
        placeholder="DD"
        className="w-[110px] h-[4rem] lg:w-[140px] rounded-lg border border-slate-300 p-4 outline-none invalid:border-red-500 invalid:text-red-500 "
        required
      />
    </div>
  );
};

export default Input;
