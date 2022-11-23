import React from "react";
import { useDeletePostMutation } from "../service/Post";
import Swal from "sweetalert2";
const Cartdetails = ({ data, price }) => {
  const [deletePost] = useDeletePostMutation();
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
      console.log(result);
      if (result.isConfirmed) {
        deletePost(id);
      }
    });
  };
  return (
    <div>
      <div className="flex gap-4 px-3 justify-between m-2">
        <img src={data.img} className="w-16 h-16 text-primary " alt="" />
        <div>
          <h2>{data.name.slice(0, 30)}</h2>
          <p> Price ${data.price}</p>
          <p>Quantity :1 </p>
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
