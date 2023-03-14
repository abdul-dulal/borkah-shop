import React from "react";

import { useDeleteWishtItemMutation } from "../../service/Post";
import Swal from "sweetalert2";
const WishlistTable = ({ data, refetch }) => {
  const [deleteItem] = useDeleteWishtItemMutation();
  const { img, price, name, _id } = data;

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
        deleteItem(id);
      }
    });
  };
  return (
    <tr>
      <th>
        <img
          src={img[0]}
          className="lg:w-20 lg:h-20 w-14 h-14 rounded"
          alt=""
        />
      </th>
      <td>{name}</td>
      <td className="space-x-2">
        <span>${price}</span>
      </td>

      <td onClick={() => handlelete(_id)} className="text-2xl cursor-pointer">
        X
      </td>
    </tr>
  );
};

export default WishlistTable;
