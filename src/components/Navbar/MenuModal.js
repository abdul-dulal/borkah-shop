import React, { useState } from "react";
import { MdClear } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const MenuModal = ({ setMenu }) => {
  const [open, setOpen] = useState(false);
  let activeStyle = {
    color: "#F766AD",
  };
  return (
    <div
      style={{ zIndex: "1000000" }}
      className="  overflow-x-hidden overflow-y-auto inset-0  -top-2 left-0 fixed  absulate right-0 mt-2 w-full h-screen px-10 rounded-md shadow-lg py-1 bg-[rgba(0,0,0,0.9)] "
    >
      <div className="">
        <div className="flex justify-end ">
          <MdClear
            className=" text-white text-4xl mt-3 cursor-pointer"
            onClick={() => setMenu(false)}
          />
        </div>

        <div className="flex justify-center items-center h-96 ">
          <ul className="space-y-5 text-[22px] text-white">
            <li className="hover:text-primary">
              <NavLink
                to="home"
                onClick={() => setMenu(false)}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink
                to="about"
                onClick={() => setMenu(false)}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About Us
              </NavLink>
            </li>
            <li className=" ">
              <div className="flex">
                <NavLink
                  to="shop"
                  className="hover:text-primary flex justify-center items-center"
                  onClick={() => setMenu(false)}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Shop
                </NavLink>
                <p
                  className="text-xl ml-2 cursor-pointer mt-1"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </p>
              </div>
              {open ? (
                <>
                  <ul className="text-sm space-y-1">
                    <li className="hover:text-primary">Abaya Borka</li>
                    <li className="hover:text-primary">Borka Items</li>
                    <li className="hover:text-primary">Hijab Items</li>
                    <li className="hover:text-primary"> Khimar</li>
                    <li className="hover:text-primary"> Niqab</li>
                    <li className="hover:text-primary">Stylish Borka</li>
                    <li className="hover:text-primary">Uncategorized</li>
                  </ul>
                </>
              ) : (
                ""
              )}
            </li>
            <li className="hover:text-primary">
              <NavLink
                to="/blog"
                onClick={() => setMenu(false)}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                blog
              </NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink
                to="contact"
                onClick={() => setMenu(false)}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact
              </NavLink>
            </li>
            <li className="hover:text-primary">
              <NavLink
                onClick={() => setMenu(false)}
                to="singup"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Singup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
