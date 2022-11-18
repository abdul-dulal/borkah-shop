import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import shop from "../../../assets/img/slider/borkha-slider-1.jpg";
import SliderImage from "react-zoom-slider";
import Description from "./ZoomSlider";
import Sidebar from "./Sidebar";
import ReletedProduct from "./ReletedProduct";
import Featuredbanner from "./Featuredbanner";
const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const id = location.state._id;

  const { name, price, review, img, category } = product;
  const navigate = useNavigate();
  const categoryList = [
    "borkha",
    "niqab",
    "khimar",
    "hijab",
    "stylish",
    "abaya",
  ];
  const categoryItem = categoryList[Math.floor(Math.random() * 6) + 1];

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/api/v1/getbyId/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  return (
    <div className="relative">
      <Featuredbanner name={name} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:px-20 px-8  my-16">
        <div className=" lg:col-span-1 col-span-full md:row-span-3 lg:order-first order-last  ">
          <Sidebar categoryItem={categoryItem} price={price} />
        </div>
        <div className=" col-span-1 overflow-hidden lg:overflow-visible ">
          {img ? (
            <SliderImage
              data={[{ image: img[0] }, { image: img[1] }, { image: img[2] }]}
              width="auto"
              height="auto"
              direction="right"
            />
          ) : (
            ""
          )}
        </div>
        <div className="  space-y-2 ">
          <h2 className="text-2xl font-bold">{name?.slice(0, 48)}</h2>
          <p className="text-primary text-base font-bold">
            ${price?.toLocaleString("en-US")}
          </p>
          <p className="flex  pb-3">
            {review
              ? Array(5).fill(
                  <AiTwotoneStar className="text-[#F9CA63] text-[18px] " />
                )
              : ""}
            <span className="text-primary ml-2 text-sm ">
              ({review} Customer Reviews)
            </span>
          </p>
          <ul className="space-y-1 text-base">
            <li>Product Type : {category}</li>
            <li> Gender : Women</li>
            <li> Color : Black, Maroon, Pest,Kofi, Master Color</li>
            <li>Body: 32 To 46 </li>
            <li>Long: 50- 52-54-56-58 </li>
            <li>Main Material:ItalianAlex Jorjet</li>
          </ul>
          <div className="flex  mt-8">
            <button
              className="border h-10 w-10 text-center cursor-pointer flex items-center justify-center"
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1}
            >
              -
            </button>
            <p className="border h-10 w-10 text-center flex items-center justify-center text-primary ">
              {quantity}
            </p>
            <button
              className={`border h-10 w-10 text-center cursor-pointer flex items-center justify-center`}
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity === 5}
            >
              +
            </button>
            <button className="bg-primary text-white w-40 h-10 ml-5">
              Add To Cart
            </button>
          </div>
          <div className="flex">
            <p className="uppercase font-bold">Sku</p> :
            <span className="ml-2">V-450</span>
          </div>
          <div className="flex">
            <p className="font-bold">Category: </p>
            <p
              className="ml-2 text-[#bcb4b4] hover:text-black cursor-pointer"
              onClick={() => navigate(`/shop/${category}`)}
            >
              {category}
            </p>
          </div>
        </div>
        <div className="md:col-span-2 =">
          <Description />
        </div>
        <div className="md:col-span-2 ">
          <ReletedProduct categoryItem={categoryItem} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
