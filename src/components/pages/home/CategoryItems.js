import React, { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import Modal from "../../../components/shere/Modal";
import Button from "../../shere/Button";
import Wishlist from "../../shere/Wishlist";
const CategoryItems = ({ item }) => {
  const { _id, name, review, price } = item;
  const [modal, setModal] = useState(false);
  const [id, setId] = useState();
  const handleShow = (id) => {
    setModal(true);
    setId(id);
  };

  return (
    <div>
      <div className="parent text-center relative  hover:shadow-sm duration-200 ">
        <Link to="/singleproduct" state={{ _id }}>
          {item?.img && (
            <img src={item?.img[0]} className="cursor-pointer" alt="" />
          )}
        </Link>
        <div className="item">
          <Button product={item} />
        </div>
        <h1 className="cursor-pointer line-clamp-1 mt-6">{name}...</h1>
        <p className="text-primary text-base font-bold my-2">
          ${price?.toLocaleString("en-US")}
        </p>
        <p className="flex justify-center items-center pb-3">
          {review
            ? Array(5).fill(
                <AiTwotoneStar className="text-[#F9CA63] text-[18px] " />
              )
            : ""}
          <span className="text-primary ml-2 ">({review})</span>
        </p>
        <div className="items ">
          <div className=" bg-white h-8 w-8  text-xl rounded-full cursor-pointer hover:bg-primary hover:text-white flex justify-center items-center">
            <MdOutlineRemoveRedEye onClick={() => handleShow(_id)} />
          </div>
          <Wishlist item={item} />
        </div>
        {modal ? <Modal setModal={setModal} id={id} /> : ""}
      </div>
    </div>
  );
};

export default CategoryItems;
