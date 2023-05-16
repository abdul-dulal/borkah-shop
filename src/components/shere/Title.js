import React from "react";

const Title = ({ title }) => {
  return (
    <div className="mt-3 md:px-20 px-8">
      <h1 className="text-center sm:text-[28px] text-[22px] font-bold pt-10 mb-3">
        {title}
      </h1>
      <p className="text-center">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry. <br /> Ipsum Has Been The Industry's Standard Dummy Text Ever
        Since
      </p>
      <p className=" border-solid  border border-primary w-32 my-4  block mx-auto"></p>
    </div>
  );
};

export default Title;
