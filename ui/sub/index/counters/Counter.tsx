"use client";

import React, { useEffect, useState } from "react";

export const Counter: React.FC<any> = ({ label, countTo, duration, index }) => {
  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    // AOS.init();
    animateCounter();
  }, []); 

  const animateCounter = () => {
    let start = 0;
    const step = Math.ceil(countTo / duration);

    const timer = setInterval(() => {
      setCounterValue((prevValue) => {
        const newValue = prevValue + step;
        if (newValue >= countTo) {
          clearInterval(timer);
          return countTo;
        }
        return newValue;
      });
    }, 1);
  };

  return (
    <div
      data-aos-duration={index*300}
      data-aos="fade-left"
      className="md:w-1/4 sm:w-1/2 p-2 flex justify-center items-center flex-col-reverse z-[1]"
    >
      <div
        className="Welcome-box py-[8px] px-[7px] rounded-2xl border border-[#f842428b] opacity-[0.9] mt-2"
      >
        <h1 className="Welcome-text text-[15px] mx-3 text-white">{label}</h1>
      </div>
      <div className="w-[150px] h-[150px] flex justify-center items-center rounded-full bg-gradient-to-r from-red-500 to-blue-500">
        <span className="font-large text-5xl text-white">
          {" "}
          {counterValue}{"+"}
        </span>
      </div>
    </div>
  );
};
