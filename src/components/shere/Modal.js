import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import {
  useCreatePostMutation,
  useGetProuductQuery,
  useProductUpdateQuantityMutation,
} from "../service/Post";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebaseinit";
import { toast } from "react-toastify";
const Modal = ({ setModal, id }) => {
  const [updateQuantity] = useProductUpdateQuantityMutation();
  const [createPost, responseInfo] = useCreatePostMutation();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const fbShare = "https://www.facebook.com/";
  const twShare = "https://twitter.com/";
  const lkShare = "https://www.linkedin.com/feed/";
  const { data } = useGetProuductQuery(id);

  const decremntQuantity = () => {
    const updateItem = { quantity: data.quantity - 1, id };
    updateQuantity(updateItem);
  };

  const incrementQuantity = () => {
    const updateItem = { quantity: data.quantity + 1, id };
    updateQuantity(updateItem);
  };
  const handleAddtoCart = async (product) => {
    const cartItem = {
      ...data,
      user: user?.email,
    };

    if (!user) {
      return navigate("/signup");
    }
    await createPost(cartItem);

    if (responseInfo.isSuccess === false) {
      return toast("Successfully Added product");
    } else {
      toast.error("Product already exist in cart");
    }
  };
  return (
    <div className=" overflow-x-hidden overflow-y-auto inset-0 -top-2 left-0 fixed absulate right-0 mt-2 w-full h-screen px-10 rounded-md shadow-lg py-1 z-30 bg-[rgba(0,0,0,0.5)] ">
      <div className={`relative my-6 lg:w-9/12 w-11/12 md:w-4/5 m-auto `}>
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex  justify-between mt-8 px-8 pt-4">
            <h2 className="md:text-xl font-semibold line-clamp-1">
              {data?.name}
            </h2>

            <MdClear
              className="  text-4xl  cursor-pointer"
              onClick={() => setModal(false)}
            />
          </div>
          <p className="border-solid border border-primary mt-7"></p>
          <div className=" grid lg:grid-cols-2 grid-cols-1   py-16 px-12 ">
            <InnerImageZoom
              src={data?.img[0]}
              zoomSrc={data?.img[0]}
              zoomType="hover"
              zoomPreload={true}
              className="w-96 h-96"
            />
            <div>
              <h2 className="text-xl text-primary  mb-2 line-clamp-1 ">
                {data?.name.slice(0, 40)}
              </h2>

              <p className="text-primary text-base font-bold flex">
                ${data?.price * data?.quantity.toLocaleString("en-US")}
              </p>

              <p className="flex">
                {data?.review
                  ? Array(5).fill(
                      <AiTwotoneStar className="text-[#F9CA63] text-[18px] " />
                    )
                  : ""}
                <span className="text-primary  text-sm ">
                  ({data?.review} Customer Reviews)
                </span>
              </p>
              <br />
              <ul className="space-y-1 text-base">
                <li className="flex">Product Type : {data?.category}</li>
                <li className="flex"> Gender : Women</li>
                <li className="flex">
                  Color : Black, Maroon, Pest,Kofi, Master Color
                </li>
                <li className="flex">Body: 32 To 46 </li>
                <li className="flex">Long: 50- 52-54-56-58 </li>
                <li className="flex">Main Material:Italian Alex Jorjet</li>
              </ul>
              <p className="border-solid border border-primary my-10"></p>
              <div className="flex gap-6 items-center ">
                <div className="space-x-4 text-xl font-bold text-[#6B7280] border-2 h-10    w-28  flex items-center justify-center">
                  <button
                    disabled={data?.quantity <= 1}
                    onClick={decremntQuantity}
                    className="cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xl">{data?.quantity}</span>
                  <button
                    disabled={data?.quantity >= 10}
                    onClick={incrementQuantity}
                    className="cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    onClick={handleAddtoCart}
                    className=" bg-primary text-white text-sm w-36 h-10 uppercase rounded-md hover:bg-black hover:text-white duration-500"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <p className=" my-4 flex">Category: {data?.category}</p>

              <div className="flex gap-7 ">
                <FacebookShareButton url={fbShare}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={twShare}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <LineShareButton url={lkShare}>
                  <LinkedinIcon size={32} round={true} />
                </LineShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
