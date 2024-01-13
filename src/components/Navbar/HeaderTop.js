import React from "react";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
const HeaderTop = () => {
  return (
    <div className="md:flex hidden  justify-between h-10 items-center bg-primary font-semibold text-sm px-20 max-w-screen-2xl mx-auto ">
      <div className="flex gap-8 text-white">
        <div className="flex gap-1 items-center">
          <HiPhone />
          <p>Mobile : </p>
          <p className="hover:text-secondary duration-500 cursor-pointer">
            01957804564
          </p>
        </div>
        <div className="flex items-center gap-1">
          <MdEmail />
          <p>Email : </p>
          <p className="hover:text-secondary duration-500 cursor-pointer">
            support@gmail.com
          </p>
        </div>
      </div>
      <div className="flex gap-4 text-white text-[18px] ">
        <BsTwitter className="hover:text-secondary duration-500" />
        <FaFacebookF className="hover:text-secondary duration-500" />
        <FaInstagramSquare className="hover:text-secondary duration-500" />
        <AiFillLinkedin className="hover:text-secondary duration-500" />
      </div>
    </div>
  );
};

export default HeaderTop;
