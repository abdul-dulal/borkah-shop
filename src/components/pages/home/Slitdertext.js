import React from "react";

const Slitdertext = ({ title }) => {
  return (
    <div>
      <h3 className="text-xl text-white font-semibold uppercase  ">
        abaya collection in bangladesh
      </h3>
      <h1 className="md:text-[42px] text-3xl font-extrabold text-primary uppercase my-5">
        {title}
      </h1>
      <p className="text-white mt-2 px-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae
      </p>
      <p className="text-white md:block hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. totam?
      </p>
    </div>
  );
};

export default Slitdertext;
