import React from "react";
import {
  AiOutlineLine,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import logo from "../../assets/img/footer-logo-borkha-shop.png";
import payment from "../../assets/img/payment.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-2xl mx-auto">
      <footer className="bg-white dark:bg-gray-900 px-12">
        <div className="grid  sm:grid-cols-2 grid-cols-1 gap-8 py-14 px-6 md:grid-cols-4">
          <div>
            <div className="cursor-pointer" onClick={() => navigate("/")}>
              <img src={logo} alt="" />
            </div>
            <ul className="text-white mt-3">
              <li className="mb-2">Lorem ipsum dolor sit amet, </li>
              <li className="mb-2">consectetur adipiscing elit, sed do</li>
              <li className="mb-4">eiusmod tempor incididunt ut labor.</li>
              <li className="">
                <img src={payment} alt="" />
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl text-white  font-bold">Usefull Link</h2>
            <ul className="text-white">
              <li className="mb-3  cursor-pointer hover:translate-x-2 duration-700 flex items-center	 ">
                <AiOutlineLine className="mr-2 " /> About Us
              </li>
              <li className="mb-3 cursor-pointer hover:translate-x-2 duration-700 flex items-center	">
                <AiOutlineLine className="mr-2 " /> Privacy Policy
              </li>
              <li className="mb-3 cursor-pointer hover:translate-x-2 duration-700 flex items-center	">
                <AiOutlineLine className="mr-2 " /> Click & Collect
              </li>
              <li className="mb-3 cursor-pointer hover:translate-x-2 duration-700 flex items-center	">
                <AiOutlineLine className="mr-2 " /> Online Returns
              </li>
              <li className="mb-3 cursor-pointer hover:translate-x-2 duration-700	flex items-center">
                <AiOutlineLine className="mr-2 " /> Refund and Returns Policy
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold text-white">Follow Us</h2>
            <ul className="text-white">
              <li className="mb-3  cursor-pointer hover:translate-x-2 duration-700 flex items-center	 ">
                <AiOutlineLine className="mr-2 " />
                <FiFacebook className="mr-2" /> Facebook
              </li>
              <li className="mb-3 cursor-pointer hover:translate-x-2 duration-700 flex items-center	">
                <AiOutlineLine className="mr-2 " />
                <BsTwitter className="mr-2" /> Twitter
              </li>
              <li className="mb-3 cursor-pointer hover:translate-x-2 duration-700 flex items-center	">
                <AiOutlineLine className="mr-2 " />
                <AiOutlineInstagram className="mr-2" />
                Instagram
              </li>
              <li className="mb-3 cursor-pointer hover:translate-x-2 duration-700 flex items-center	">
                <AiOutlineLine className="mr-2 " />
                <FaPinterestP className="mr-2" />
                Pinterest
              </li>
              <li className="mb-3 cursor-pointer hover:translate-x-2 duration-700	flex items-center">
                <AiOutlineLine className="mr-2 " />
                <AiOutlineYoutube className="mr-2" /> Youtube
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold text-white">Contact Info</h2>
            <div className=" flex text-white gap-3">
              <div className=" border border-primary w-12 h-12 ">
                <GoLocation className=" text-xl block mx-auto text-primary  mt-3 " />
              </div>
              <div>
                <h1 className="font-bold text-base"> Address:</h1>
                <p className="text-sm">Rangpur</p>
              </div>
            </div>
            <div className=" flex text-white gap-3 mt-3">
              <div className=" border border-primary w-12 h-12 ">
                <BsTelephone className=" text-xl block mx-auto  text-primary mt-3 " />
              </div>
              <div>
                <h1 className="font-bold text-base"> Phone:</h1>
                <p className="text-sm">01778613474</p>
              </div>
            </div>
            <div className=" flex text-white gap-3 mt-3">
              <div className=" border border-primary w-12 h-12 ">
                <AiOutlineMail className=" text-xl block mx-auto  text-primary mt-3 " />
              </div>
              <div>
                <h1 className="font-bold text-base"> Email:</h1>
                <p className="text-sm">example@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-6 px-4 bg-primary  text-center">
        <span className="text-base text-white">
          © 2022 - Borkha Shop | Developed by Abdul Dulal
        </span>
      </div>
    </div>
  );
};

export default Footer;
