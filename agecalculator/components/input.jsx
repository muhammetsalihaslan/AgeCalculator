import React from "react";

const Input = ({ time, ts }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="">Day</label>
      <input type="number" placeholder="DD" className="" />
    </div>
  );
};

export default Input;
