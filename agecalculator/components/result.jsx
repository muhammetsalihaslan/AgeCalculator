import React from "react";

const Result = ({ timePart, age }) => {
  return (
    <div className="flex flex-row ms-8 font-bold gap-x-6">
      <div className="text-7xl text-violet-500">{age}</div>
      <div className="text-7xl italic">{timePart}</div>
    </div>
  );
};

export default Result;
