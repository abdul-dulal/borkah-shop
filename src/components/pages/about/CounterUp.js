import React from "react";
import CountUp from "react-countup";

const CounterUp = ({ end, img, title }) => {
  return (
    <div className="lg:flex gap-4   max-w-screen-2xl mx-auto ">
      <div className="flex justify-center ">
        <img src={img} alt="" />
      </div>
      <div className="lg:my-0 my-5 text-center">
        <CountUp start={0} end={end} duration={4} delay={0}>
          {({ countUpRef }) => (
            <div className="text-white">
              <span
                className="lg:text-5xl md:text-3xl font-extrabold"
                ref={countUpRef}
              />
              <span className="lg:text-5xl md:text-3xl font-extrabold">+</span>
              <h1 className="uppercase">{title}</h1>
            </div>
          )}
        </CountUp>
      </div>
    </div>
  );
};

export default CounterUp;
