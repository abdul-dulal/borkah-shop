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
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        deletePost(id);
      }
    });
  };
  return (
    <div className="mt-4">
      <div className="flex gap-4  justify-between m-2">
        <img src={data.img[0]} className="w-16 h-16 text-primary " alt="" />
        <div>
          <p className="text-primary hover:text-black  line-clamp-2">
            {data.name}
          </p>
          <p> Price ${data.price}</p>
          <p>Quantity :{data.quantity} </p>
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
