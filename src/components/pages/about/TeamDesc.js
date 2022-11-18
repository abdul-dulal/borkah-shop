import React from "react";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
const TeamDesc = ({ team, name, deg }) => {
  return (
    <div className="bg-[#F4F4F4] rounded">
      <img src={team} alt="" />
      <h1 className="text-base text-center font-bold mt-5">{name}</h1>
      <p className="text-primary text-center">{deg}</p>
      <div className="flex justify-center my-5 gap-3 px-3">
        <div className="h-12 cursor-pointer w-12 rounded-full bg-white hover:bg-primary  text-primary hover:text-white flex justify-center items-center">
          <ImFacebook className="  " />
        </div>
        <div className="h-12 cursor-pointer w-12 rounded-full bg-white flex justify-center items-center text-primary hover:text-white hover:bg-primary">
          <AiOutlineTwitter />
        </div>
        <div className="h-12 cursor-pointer w-12 rounded-full bg-white flex justify-center items-center text-primary hover:text-white hover:bg-primary">
          <AiOutlineInstagram />
        </div>
      </div>
    </div>
  );
};

export default TeamDesc;
