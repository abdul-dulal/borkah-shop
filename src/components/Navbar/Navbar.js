import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/borkha-shop-logo.png";
import { RiArrowDownSLine } from "react-icons/ri";
import Submenu from "./Submenu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../shere/Logout";
import auth from "../../Firebaseinit";
import avatar from "../../assets/img/avatar.a296afc6.png";
import { useGetCartItemsbyuserQuery } from "../service/Post";
import HeaderTop from "./HeaderTop";
import Mainmodal from "../shere/Mainmodal";
import Cartmodal from "../../components/shere/CartModal";
import Category from "./Category";
const Navbar = () => {
  const [hide, setHide] = useState(true);
  const [modalShown, toggleModal] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { data } = useGetCartItemsbyuserQuery(user?.email);

  let activeStyle = {
    color: "#F766AD",
    backgroundColor: "white",
  };
  const handleHide = () => {
    setHide(!hide);
  };
  return (
    <div>
      <HeaderTop />
      <div className="flex justify-between px-20 h-24 items-center  object-contain">
        <div>
          <NavLink to="home">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div>
          <ul className="lg:flex hidden menu menu-horizontal   z-50  gap-12 font-semibold ">
            <li>
              <NavLink
                to="home"
                className="hover:text-primary  hover:bg-white"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className="hover:text-primary hover:bg-white"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About Us
              </NavLink>
            </li>
            <li tabindex="0" className="z-50 menu menu-horizontal">
              <NavLink
                to="shop"
                className="hover:text-primary hover:bg-white"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Shop
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NavLink>
              <ul class="p-2  w-60  -ml-10  duration-1000  bg-white text-primary">
                <Category category="abaya" text="Abaya Borka" />
                <Category category="borkha" text=" Borka Items" />
                <Category category="hijab" text="  Hijab Items" />
                <Category category="khimar" text="Khimar" />
                <Category category="niqab" text="Niqab" />
                <Category category="stylish" text="Stylish Borka" />
              </ul>
            </li>
            <li>
              <NavLink
                to="blog"
                className="hover:text-primary hover:bg-white"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className="hover:text-primary hover:bg-white"
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
                  className="hover:text-primary hover:bg-white"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Signup
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="flex  gap-5">
          <div className="">
            <div className="App">
              <button
                onClick={() => {
                  toggleModal(!modalShown);
                }}
              >
                <AiOutlineShoppingCart className="text-2xl font-bold" />
              </button>
              <Mainmodal
                shown={modalShown}
                close={() => {
                  toggleModal(false);
                }}
              >
                <Cartmodal toggleModal={toggleModal} />
              </Mainmodal>
            </div>
            <div className="relative -top-10 left-4 ">
              <p className="bg-black  flex justify-center text-sm items-center w-5 h-5 rounded-full text-white">
                {data ? data.length : 0}
              </p>
            </div>
          </div>
          <div className="dropdown dropdown-end ">
            <label tabIndex="0" className="">
              {user ? (
                <img
                  src={user.photoURL}
                  onClick={handleHide}
                  className="w-8 h-8 rounded-full cursor-pointer"
                  alt=""
                />
              ) : (
                <img
                  src={avatar}
                  onClick={handleHide}
                  className="w-8 h-8  cursor-pointer"
                  alt=""
                />
              )}
            </label>
            {hide ? (
              ""
            ) : (
              <>
                <ul
                  tabIndex="0"
                  className="dropdown-content py-10 menu ml-4 p-2 bg-base-100 w-52"
                >
                  <li className=" text-primary">
                    <Link to="/myaccount">My Account</Link>
                  </li>
                  <hr />
                  <li className=" text-primary">
                    <Link to="/setting">Setting</Link>
                  </li>
                  <hr />
                </ul>
              </>
            )}
          </div>
        </div>

        <Submenu />
      </div>
    </div>
  );
};

export default Navbar;
