import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
const FeedbackSpace = ({ img, name }) => {
  return (
    <div className="sm:flex  bg-white h-auto md:py-10 sm:py-10 py-4  rounded w-[95%]  gap-5 px-6 mt-4">
      <div>
        <img src={img} className="w-11/12" alt="" />
      </div>
      <div className="sm:text-left text-center">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="flex sm:justify-start justify-center py-2">
          {Array(5).fill(
            <AiTwotoneStar className="text-[#F9CA63] text-[18px] " />
          )}
        </p>
        <p>
          Quisque velit massa, imperdiet eget mattis non, dapibus quis eros. In
          consectetur sodales nisi vel suscipit. Maecenas orci dolor, convallis
          sit amet malesuada eu, elementum et diam.
        </p>
      </div>
    </div>
  );
};

export default FeedbackSpace;
