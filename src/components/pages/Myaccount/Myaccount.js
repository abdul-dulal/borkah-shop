import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../../Firebaseinit";
import Logout from "../../shere/Logout";

const Myaccount = () => {
  const [user] = useAuthState(auth);
  let activeStyle = {
    color: "#F766AD",
  };
  return (
    <div className=" lg:px-20 px-10 my-16 max-w-screen-2xl  mx-auto">
      <div className="grid lg:grid-cols-3  grid-cols-1 gap-10  bg-[#F4F4F4] py-20">
        <div className=" col-span-1 px-10">
          <ul className="  space-y-4  cursor-pointer   ">
            <li className="h-12 cursor-pointer hover:text-primary  p-3 text-gray-400 border ">
              <NavLink to="" className=" ">
                Dashboard
              </NavLink>
            </li>
            <li className="h-12 cursor-pointer  p-3 text-gray-400 border  hover:text-primary">
              <NavLink
                to="/myaccount/editProfile"
                className=""
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Edit Profile
              </NavLink>
            </li>

            <li className="h-12 cursor-pointer hover:text-primary  p-3 text-gray-400 border ">
              <NavLink
                to="/myaccount/editAddress"
                className=""
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Edit Address
              </NavLink>
            </li>
            <li className="h-12 cursor-pointer hover:text-primary  p-3 text-gray-400 border ">
              <NavLink
                to="/myaccount/orderHistory"
                className=""
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Order History
              </NavLink>
            </li>
            <li className="h-12 cursor-pointer  hover:text-primary p-3 text-gray-400 border ">
              <NavLink
                to="/myaccount/editPassword"
                className=""
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Edit Password
              </NavLink>
            </li>
            <li className="h-12 cursor-pointer  p-3 text-gray-400 border ">
              <Logout />
            </li>
          </ul>
        </div>
        <div className="lg:col-start-2  lg:col-end-4 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Myaccount;
