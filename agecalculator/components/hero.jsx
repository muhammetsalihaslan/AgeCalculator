"use client";
import React, { useEffect, useState } from "react";
import Input from "./input";
import Image from "next/image";
import Result from "./result";

const Hero = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState([]);

  useEffect(() => {
    const countAge = () => {
      if (day && month && year) {
        const birthday = new Date(`${year}-${month}-${day}`);
        const today = new Date();

        const ageYear = today.getFullYear() - birthday.getFullYear();
        const ageMonth = today.getMonth() - birthday.getMonth();
        const ageDay = today.getDate() - birthday.getDate();

        setAge({
          year: ageYear,
          month: ageMonth,
          day: ageDay,
        });
      }
    };
    countAge();
    setAge("");
  }, [day, month, year]);

  return (
    <div className="flex flex-col bg-white ms-3 me-3 h-3/4 w-9/12  rounded-t-3xl rounded-bl-3xl rounded-br-[7rem] md:w-[650px] ">
      <div className="flex justify-start p-5 mt-10 ms-5 me-5 gap-x-5 ">
        <Input
          time="DAY"
          ts="DD"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <Input
          time="MONTH"
          ts="MM"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <Input
          time="YEAR"
          ts="YYYY"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <hr className="m-6" />
      <div className="flex justify-center sm:justify-end sm:me-[30px]">
        <Image
          src="/images/icon-arrow.svg"
          width={70}
          height={50}
          className="bg-violet-500 rounded-full p-3 -mt-[55px]"
        />
      </div>
      <div>
        <Result timePart="year" age={age.year} />
        <Result timePart="month" age={age.month} />
        <Result timePart="day" age={age.day} />
      </div>
    </div>
  );
};

export default Hero;
