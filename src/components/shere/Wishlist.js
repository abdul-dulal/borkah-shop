import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebaseinit";
import { useAddWishlistMutation } from "../service/Post";

const Wishlist = ({ item }) => {
  const [addWishlist, responseInfo] = useAddWishlistMutation();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleWishlist = async (item) => {
    const wishtlistItem = {
      name: item.name,
      user: user?.email,
      img: item.img,
      quantity: item.quantity,
      price: item.price,
    };

    if (!user) {
      return navigate("/signup");
    }
    await addWishlist(wishtlistItem);
    if (responseInfo.isSuccess === false) {
      return toast("Successfully Added wishlist");
    } else {
      toast.error("Product already exist in cart");
    }
  };

  return (
    <div className="mt-8 bg-white h-8 w-8  text-xl rounded-full cursor-pointer hover:bg-primary hover:text-white flex justify-center items-center">
      <AiOutlineHeart onClick={() => handleWishlist(item)} />
    </div>
  );
};

export default Wishlist;
