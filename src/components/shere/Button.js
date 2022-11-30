import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebaseinit";
import { useCreatePostMutation } from "../service/Post";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Button = ({ product }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [createPost, responseInfo] = useCreatePostMutation();
  const handleAddtoCart = async (product) => {
    const cartItem = {
      name: product.name,
      price: product.price,
      user: user?.email,
      img: product.img,
    };
    console.log(user);
    if (!user) {
      return navigate("/login");
    }
    await createPost(cartItem);

    if (responseInfo.isSuccess == false) {
      return toast("Successfully Added product");
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleAddtoCart(product)}
          className="bg-black w-full  text-white h-11 rounded hover:bg-primary duration-500"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Button;
