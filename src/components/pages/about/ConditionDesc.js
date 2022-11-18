import React from "react";

const ConditionDesc = ({ icon, title, desc }) => {
  return (
    <div className="border-2 py-8">
      <p className="text-4xl text-primary font-bold flex justify-center">
        {icon}
      </p>
      <h1 className="text-base font-bold text-center my-2"> {title}</h1>
      <p className="px-6  text-center">{desc}</p>
    </div>
  );
};

export default ConditionDesc;
