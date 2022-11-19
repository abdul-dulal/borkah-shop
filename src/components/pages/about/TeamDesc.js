import React from "react";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
const TeamDesc = ({ team, name, deg }) => {
  return (
    <div className="bg-[#F4F4F4] rounded">
      <div className="hello2">
        <div className=" ">
          <img src={team} alt="" />
          <div className="hello"></div>
        </div>
      </div>
      <h1 className="text-base font-bold text-center my-2">{name}</h1>
      <p className="text-center text-primary">{deg}</p>
      <div className="flex justify-center my-5 gap-3 px-3 pb-7">
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
