import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import SliderImage from "react-zoom-slider";
import Description from "./ZoomSlider";
import Sidebar from "./Sidebar";
import ReletedProduct from "./ReletedProduct";
import Featuredbanner from "./Featuredbanner";
import {
  useCreatePostMutation,
  useGetProuductQuery,
  useProductUpdateQuantityMutation,
} from "../../service/Post";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebaseinit";
import Loading from "../../shere/Loading";
const SingleProduct = () => {
  const [createPost, responseInfo] = useCreatePostMutation();
  const location = useLocation();
  const id = location.state._id;
  const { data, isLoading } = useGetProuductQuery(id);
  const [updateQuantity] = useProductUpdateQuantityMutation();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  if (isLoading) {
    return <Loading />;
  }

  const { name, price, review, img, category, quantity } = data;

  const categoryList = [
    "borkha",
    "niqab",
    "khimar",
    "hijab",
    "stylish",
    "abaya",
  ];

  const categoryItem = categoryList[Math.floor(Math.random() * 5) + 1];
  const plain = price * quantity;
  const handleAddtoCart = async (product) => {
    const cartItem = {
      name,
      user: user?.email,
      img,
      quantity,
      price: plain,
    };

    if (!user) {
      return navigate("/login");
    }
    await createPost(cartItem);

    if (responseInfo?.isSuccess === false) {
      return toast("Successfully Added product");
    } else {
      toast.error("Product already exist in cart");
    }
  };

  const decremntQuantity = () => {
    const updateItem = { quantity: quantity - 1, id };
    updateQuantity(updateItem);
  };

  const incrementQuantity = () => {
    const updateItem = { quantity: quantity + 1, id };
    updateQuantity(updateItem);
  };

  return (
    <div className="relative">
      <Featuredbanner name={name} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  md:px-20 px-8  my-16 ">
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
              ${plain.toLocaleString("en-US")}
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
                onClick={decremntQuantity}
                disabled={quantity === 1}
              >
                -
              </button>
              <p className="border h-10 w-10 text-center flex items-center justify-center text-primary ">
                {quantity}
              </p>
              <button
                className={`border h-10 w-10 text-center cursor-pointer flex items-center justify-center`}
                onClick={incrementQuantity}
                disabled={quantity === 10}
              >
                +
              </button>
              <button
                className="bg-primary text-white w-40 h-10 ml-5"
                onClick={handleAddtoCart}
              >
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
    </div>
  );
};

export default SingleProduct;
