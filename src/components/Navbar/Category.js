import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ category, text }) => {
  const navigate = useNavigate();
  return (
    <div>
      <li
        className="hover:bg-primary hover:text-white py-3 text-base px-3 cursor-pointer"
        onClick={() => navigate(`/shop/${category}`)}
      >
        {text}
      </li>
      <hr />
    </div>
  );
};

export default Category;
