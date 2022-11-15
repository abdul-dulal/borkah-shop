import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopRated from "./TopRated";

const Sidebar = ({ categoryItem, price }) => {
  const [product, setProduct] = useState([]);
  const [topRated, setToprated] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/product/api/v1/getAllProudct")
      .then((res) => setProduct(res.data));
    axios
      .get(
        `http://localhost:3000/product/api/v1/topRatedProduct?category=${categoryItem}&price=1000`
      )
      .then((res) => setToprated(res.data));
  }, []);
  return (
    <div className="bg-[#F7F7F7] px-10 pt-4 pb-10">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search Product..."
        className="h-12 w-full border-2 rounded  my-8 px-3 outline-offset-0 outline-primary ring-0"
      />
      <p className="text-2xl font-bold my-3">Product Categories</p>
      <p className="h-[1.5px] w-20 bg-primary"></p>
      <hr className="" />
      <div className=" space-y-2 my-5">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => navigate(`/shop/${"abaya"}`)}
        >
          <label className="cursor-pointer ">
            <input type="radio" className="mr-2" /> Abaya Borka
          </label>
          <p className="text-primary bg-[#EEEEEE]  rounded-full h-6 p-1 w-6">
            {product.slice(0, 8).length}
          </p>
        </div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => navigate(`/shop/${"borkha"}`)}
        >
          <label className="cursor-pointer ">
            <input type="radio" className="mr-2" /> Borka Items
          </label>
          <p className="text-primary bg-[#EEEEEE]  rounded-full h-6 p-1 w-6">
            {product.slice(9, 20).length}
          </p>
        </div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => navigate(`/shop/${"hijab"}`)}
        >
          <label className="cursor-pointer ">
            <input type="radio" className="mr-2" /> Hijab Items
          </label>
          <p className="text-primary bg-[#EEEEEE]  rounded-full h-6 p-1 w-6">
            {product.slice(21, 29).length}{" "}
          </p>
        </div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => navigate(`/shop/${"khimar"}`)}
        >
          <label className="cursor-pointer ">
            <input type="radio" className="mr-2" />
            Khimar
          </label>
          <p className="text-primary bg-[#EEEEEE]  rounded-full h-6 p-1 w-6">
            {product.slice(29, 33).length}
          </p>
        </div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => navigate(`/shop/${"niqab"}`)}
        >
          <label className="cursor-pointer ">
            <input type="radio" className="mr-2" />
            Niqab
          </label>
          <p className="text-primary bg-[#EEEEEE]  rounded-full h-6 p-1 w-6">
            {product.slice(29, 33).length}
          </p>
        </div>

        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => navigate(`/shop/${"stylish"}`)}
        >
          <label className="cursor-pointer ">
            <input type="radio" className="mr-2" />
            Stylish Borka
          </label>
          <p className="text-primary bg-[#EEEEEE]  rounded-full h-6 p-1 w-6">
            {product.slice(35, 46).length}
          </p>
        </div>
        <div
          className="flex justify-between items-center  cursor-pointer"
          onClick={() => navigate(`/shop/${"abaya"}`)}
        >
          <label className="cursor-pointer ">
            <input type="radio" className="mr-2" />
            Uncategorized
          </label>
          <p className="text-primary bg-[#EEEEEE]  rounded-full h-6 p-1 w-6">
            {product.slice(44, 46).length}
          </p>
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold my-3">Top Rated Products</p>
        <p className="h-[1.5px] w-20 bg-primary"></p>
        <hr />
        <div className=" mt-8">
          {topRated?.map((item) => (
            <TopRated item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
