import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDeletePostMutation } from "../../service/Post";
const CartTable = ({ info, total, setTotal }) => {
  const [increment, setIncrement] = useState(1);
  const { img, price, name, _id } = info;
  const [deletePost] = useDeletePostMutation();
  total = price * increment;
  setTotal(total);

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

  const handleIncrement = () => {
    setIncrement(increment + 1);
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
              onClick={() => setIncrement(increment - 1)}
              disabled={increment == 1}
              className={`cursor-pointer  ${
                increment <= 1 ? "cursor-not-allowed" : ""
              }`}
            >
              -
            </button>
            <span className="text-xl">{increment}</span>
            <button
              disabled={increment >= 10}
              onClick={() => handleIncrement(_id)}
              className={`cursor-pointer ${
                increment >= 10 ? "cursor-not-allowed" : ""
              }`}
            >
              +
            </button>
          </div>
        </td>
        <td>${total}</td>
        <td onClick={() => handlelete(_id)} className="text-2xl cursor-pointer">
          X
        </td>
      </tr>
    </>
  );
};

export default CartTable;
