"use client";
import React, { useEffect, useState } from "react";
import Input from "./input";
import Image from "next/image";
import Result from "./result";

const Hero = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  useEffect(() => {
    const countAge = () => {
      if (day && month && year) {
        const birthday = new Date(`${year}-${month}-${day}`);
        const today = new Date();

        let ageYear = today.getFullYear() - birthday.getFullYear();
        let ageMonth = today.getMonth() - birthday.getMonth();
        let ageDay = today.getDate() - birthday.getDate();

        if (ageDay < 0) {
          const lastMonth = new Date(
            today.getFullYear(),
            today.getMonth() - 1,
            0
          );
          ageDay = lastMonth.getDate() - birthday.getDate() + today.getDay();
          ageMonth -= 1;
        }

        if (ageMonth < 0) {
          ageMonth += 12;
          ageYear -= 1;
        }

        setAge({
          years: ageYear,
          months: ageMonth,
          days: ageDay,
        });
      }
    };
    countAge();
  }, [day, month, year]);

  return (
    <div className="flex flex-col bg-white ms-3 me-3 h-3/4 w-9/12  rounded-t-3xl rounded-bl-3xl rounded-br-[7rem] md:w-[650px] ">
      <div className="flex justify-start p-5 mt-10 ms-5 me-5 gap-x-5 ">
        <Input
          time="DAY"
          ts="DD"
          value={day}
          name="day"
          onChange={(e) => setDay(e.target.value)}
        />
        <Input
          time="MONTH"
          ts="MM"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          name="month"
        />
        <Input
          time="YEAR"
          ts="YYYY"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          name="year"
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
        <Result timePart="year" age={age.years} />
        <Result timePart="month" age={age.months} />
        <Result timePart="day" age={age.days} />
      </div>
    </div>
  );
};

export default Hero;
