import React, { useState } from "react";
import {
  useDeletePostMutation,
  useUpdateQuantityMutation,
} from "../service/Post";
import Swal from "sweetalert2";
const Cartdetails = ({ data }) => {
  const [deletePost] = useDeletePostMutation();
  const [updateQuantity] = useUpdateQuantityMutation();

  const handleelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        deletePost(id);
      }
    });
  };

  const decrementQuantity = (id) => {
    const updateItem = { quantity: data.quantity - 1, id };
    updateQuantity(updateItem);
  };

  const incrementQuantity = (id) => {
    const updateItem = { quantity: data.quantity + 1, id };
    updateQuantity(updateItem);
  };
  return (
    <div className="mt-4">
      <div className="flex gap-4  justify-between m-2 ">
        <img src={data.img[0]} className="w-16 h-16 text-primary " alt="" />
        <div>
          <p className="text-primary hover:text-black  line-clamp-1">
            {data.name}
          </p>

          <div className="flex py-4">
            <button
              disabled={data.quantity === 1}
              onClick={() => decrementQuantity(data._id)}
              className="border h-10 w-10 border-gray-300 rounded"
            >
              -
            </button>
            <button className="border h-10 w-10 border-gray-300 rounded">
              {data.quantity}
            </button>
            <button
              onClick={() => incrementQuantity(data._id)}
              className="border h-10 w-10 border-gray-300 rounded"
            >
              +
            </button>
          </div>
          <p>
            Price ${data.price} x {data.quantity}
          </p>
        </div>
        <p
          className="text-xl cursor-pointer"
          onClick={() => handleelete(data._id)}
        >
          x
        </p>
      </div>
    </div>
  );
};

export default Cartdetails;
