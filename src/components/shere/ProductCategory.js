import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCategory = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://borkha-shop.onrender.com/product/api/v1/getAllProudct")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <div>
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
            {product?.slice(21, 29).length}
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
    </div>
  );
};

export default ProductCategory;
