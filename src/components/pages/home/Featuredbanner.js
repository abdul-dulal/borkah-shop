import React from "react";
import { Link } from "react-router-dom";
import shop from "../../../assets/img/slider/borkha-slider-1.jpg";
const Featuredbanner = ({ name }) => {
  return (
    <div className="relative max-w-screen-2xl mx-auto">
      <div
        className="h-64 w-full   "
        style={{
          background: `url(${shop})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute top-0 left-0 h-64 w-full bg-black opacity-[.8] flex items-center">
        <div className="md:px-20 px-8">
          <h1 className="text-white text-2xl font-semibold first-letter:uppercase cursor-pointer">
            {name?.length < 15 ? name : name?.slice(0, 34)}
          </h1>
          <ul className="flex gap-3 text-white mt-3">
            <Link to="/">Home ></Link>
            <Link to="/shop">Product ></Link>
            <li className="first-letter:uppercase">
              {name?.slice(0, 35)} <span>{name?.length < 15 ? "" : "..."}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Featuredbanner;
