import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const TopRated = ({ item }) => {
  const { name, img, price, review, _id } = item;
  return (
    <div className="flex gap-5 mt-3">
      <div className="">
        <Link to="/singleproduct" state={{ _id }}>
          <img
            src={img[0]}
            className="w-24 rounded gap-2 cursor-pointer "
            alt=""
          />
        </Link>
      </div>
      <div className="">
        <Link to="/singleproduct" state={{ _id }}>
          <p className="text-primary hover:text-black cursor-pointer text-base">
            {name.slice(0, 30)}
          </p>
        </Link>

        <p className="flex  items-center">
          {review
            ? Array(5).fill(
                <AiTwotoneStar className="text-[#F9CA63] text-[18px] " />
              )
            : ""}
        </p>
        <p> ${price.toLocaleString("en-US")}</p>
      </div>
    </div>
  );
};

export default TopRated;
