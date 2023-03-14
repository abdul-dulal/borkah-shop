import React from "react";
import Swal from "sweetalert2";
import {
  useDeletePostMutation,
  useUpdateQuantityMutation,
} from "../../service/Post";
const CartTable = ({ item }) => {
  const { img, price, name, _id, quantity } = item;
  const [deletePost] = useDeletePostMutation();
  const [updateQuantity] = useUpdateQuantityMutation();

  const handlelete = async (id) => {
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
    const updateItem = { quantity: quantity - 1, id };
    updateQuantity(updateItem);
  };

  const incrementQuantity = (id) => {
    const updateItem = { quantity: quantity + 1, id };
    updateQuantity(updateItem);
  };
  return (
    <>
      <tr>
        <th>
          <img src={img[0]} className="w-20 h-20" alt="" />
        </th>
        <td>{name.slice(0, 50)}</td>
        <td className="space-x-2">
          <span>${price}</span>
        </td>
        <td>
          <div className="space-x-4 text-xl font-bold text-[#6B7280] border-2 h-10    w-28  flex items-center justify-center">
            <button
              onClick={() => decrementQuantity(_id)}
              disabled={quantity === 1}
              className={`cursor-pointer  `}
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={() => incrementQuantity(_id)}
              className={`cursor-pointer `}
            >
              +
            </button>
          </div>
        </td>
        <td>{price * quantity}</td>
        <td onClick={() => handlelete(_id)} className="text-2xl cursor-pointer">
          X
        </td>
      </tr>
    </>
  );
};

export default CartTable;
