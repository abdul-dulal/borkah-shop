import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/borkha-shop-logo.png";
import { RiArrowDownSLine } from "react-icons/ri";
import Submenu from "./Submenu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../shere/Logout";
import auth from "../../Firebaseinit";
import avatar from "../../assets/img/avatar.a296afc6.png";
import CartModal from "../../components/shere/CartModal";
import { useGetCartItemsbyuserQuery } from "../service/Post";
import HeaderTop from "./HeaderTop";
import Signup from "../../../src/components/pages/signup/Signup";
const Navbar = () => {
  const [cartModal, setCartmodal] = useState(false);
  const [hide, setHide] = useState(true);
  const [user] = useAuthState(auth);
  const { data } = useGetCartItemsbyuserQuery(user?.email);

  let activeStyle = {
    color: "#F766AD",
  };
  const handleHide = () => {
    setHide(!hide);
  };
  return (
    <div>
      <HeaderTop />
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
                    <Link to="">Setting</Link>
                  </li>
                  <hr />
                </ul>
              </>
            )}
          </div>
        </div>

        <Submenu />
      </div>
      <CartModal cartModal={cartModal} />
    </div>
  );
};

export default Navbar;
