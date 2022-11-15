import React, { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../shere/Button";
import Modal from "../../shere/Modal";

const ReleteProd = ({ product }) => {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState();
  const { _id, name, img, review, price } = product;
  const handleShow = (id) => {
    setModal(true);
    setId(id);
  };
  return (
    <div className="parent text-center space-y-2 relative  hover:shadow-2xl duration-200 w-4/12 ">
      <Link to="/singleproduct" state={{ _id }}>
        <img src={img[0]} className="cursor-pointer " alt="" />
      </Link>
      <div className="item">
        <Button product={product} />
      </div>
      <h1 className="cursor-pointer line-clamp-2">{name}...</h1>
      <p className="text-primary text-base font-bold">
        ${price.toLocaleString("en-US")}
      </p>
      <p className="flex justify-center items-center pb-3">
        {review
          ? Array(5).fill(
              <AiTwotoneStar className="text-[#F9CA63] text-[18px] " />
            )
          : ""}
        <span className="text-primary ml-2 ">({review})</span>
      </p>
      <div className="items bg-white h-8 w-8  text-xl rounded-full cursor-pointer hover:bg-primary hover:text-white flex justify-center items-center">
        <MdOutlineRemoveRedEye onClick={() => handleShow(_id)} />
      </div>
      {modal ? <Modal setModal={setModal} id={id} /> : ""}
    </div>
  );
};

export default ReleteProd;
