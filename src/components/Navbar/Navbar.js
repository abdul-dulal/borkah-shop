import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/borkha-shop-logo.png";
import { RiArrowDownSLine } from "react-icons/ri";
import Submenu from "./Submenu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../shere/Logout";
import auth from "../../Firebaseinit";
import avatar from "../../assets/img/avatar.a296afc6.png";
import CartModal from "../../components/shere/CartModal";
import { useGetAllCartItemQuery } from "../service/Post";
const Navbar = () => {
  const [cartModal, setCartmodal] = useState(false);
  const [user] = useAuthState(auth);
  const { data } = useGetAllCartItemQuery();

  let activeStyle = {
    color: "#F766AD",
  };
  return (
    <div>
      <div className="flex justify-between px-20 h-24 items-center sticky object-contain">
        <div>
          <NavLink to="home">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div>
          <ul className="lg:flex hidden   gap-12 font-semibold ">
            <li>
              <NavLink
                to="home"
                className="hover:text-primary"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className="hover:text-primary"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About Us
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className="hover:text-primary"
                to="shop"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <div className="dropdown">
                  <label
                    tabIndex={0}
                    className="flex items-center justify-center cursor-pointer "
                  >
                    Shop <RiArrowDownSLine className="text-2xl" />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-white w-40 mt-5 -ml-10"
                  >
                    <li className="hover:bg-primary hover:text-white">
                      <a>Abaya Borka</a>
                    </li>
                    <hr />
                    <li className="hover:bg-primary hover:text-white">
                      <a>Borka Items</a>
                    </li>
                    <hr />
                  </ul>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                className="hover:text-primary"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="hover:text-primary"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact
              </NavLink>
            </li>
            {user ? (
              <Logout />
            ) : (
              <li>
                <NavLink
                  to="signup"
                  className="hover:text-primary"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Signup
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="flex relative gap-5">
          <div className="relative">
            <AiOutlineShoppingCart
              className="text-2xl cursor-pointer hover:text-primary"
              onClick={() => setCartmodal(!cartModal)}
            />
            <div className="absolute -top-3 left-4 ">
              <p className="bg-black  flex justify-center text-sm items-center w-5 h-5 rounded-full text-white">
                {data ? data.length : 0}
              </p>
            </div>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label
              tabIndex={0}
              className="flex items-center justify-center cursor-pointer "
            >
              <img src={avatar} className="w-7" alt="" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white w-40 mt-5 -ml-10"
            >
              <li className="hover:bg-primary hover:text-white">
                <a>Abaya Borka</a>
              </li>
              <hr />
              <li className="hover:bg-primary hover:text-white">
                <a>Borka Items</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>

        <Submenu />
      </div>
      <CartModal cartModal={cartModal} />
    </div>
  );
};

export default Navbar;
