import React from "react";
import { useNavigate } from "react-router-dom";
const CategoryText = ({ title, pNumber, img, category }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white cursor-pointer  rounded"
      onClick={() => navigate(`/shop/${category}`)}
    >
      <img src={img} alt="" />
      <p className="text-base font-bold text-center mt-6 hover:text-primary pb-5">
        {title} ({pNumber})
      </p>
    </div>
  );
};

export default CategoryText;
