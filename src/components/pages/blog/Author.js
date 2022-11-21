import React from "react";

import { Link } from "react-router-dom";
import shop from "../../../assets/img/slider/borkha-slider-1.jpg";
import BlogSidebar from "./BlogSidebar";
import Showblog from "./Showblog";
const Author = () => {
  return (
    <div>
      <div className="relative">
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
              Author: Dulal
            </h1>
            <p className="text-xl text-white my-2">
              This author has written 8 articles
            </p>
            <ul className="flex gap-3 text-white mt-3">
              <Link to="/">Home ></Link>
              <Link to="/shop">Product ></Link>
              <li className="first-letter:uppercase">blog</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1 my-14 lg:px-20 px-10">
        <div
          className="col-span-2 
        "
        >
          <Showblog />
        </div>
        <div className="w-full">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default Author;
