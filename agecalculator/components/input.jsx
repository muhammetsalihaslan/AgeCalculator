"use client";
import React, { useEffect, useState } from "react";

const Input = ({ time, ts, value, onChange, name }) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (/^[a-zA-Z]+$/.test(value)) {
      setErrorMessage("Must be a valid date");
    } else if (name === "day" && (value > 31 || parseFloat(value) <= 0)) {
      setErrorMessage("Must be a valid date");
    } else if (name === "month" && (value > 12 || parseFloat(value) <= 0)) {
      setErrorMessage("Must be a valid date");
    } else if (name === "year" && parseFloat(value) <= 100) {
      setErrorMessage("Must be a valid date");
    } else {
      setErrorMessage(" ");
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-y-1">
      <label
        htmlFor="date"
        className="text-sm md:text-base font-bold ms-1 invalid:text-red-500"
      >
        {time}
      </label>
      <input
        type="text"
        id="date"
        value={value}
        name={name}
        onChange={onChange}
        pattern="[0-9]+"
        placeholder={ts}
        className="focus-outline-none w-[90px] h-[3rem] md:h-[4rem] md:w-[140px] rounded-lg border text-md md:text-xl font-semibold text-slate-500 border-slate-300 p-4 outline-none invalid:border-red-500 invalid:text-red-500 in"
        required
      />
      {errorMessage && (
        <div className="text-red-500 text-[8px] w-[90px] font-semibold md:text-[14px] md:w-[140px]">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Input;
