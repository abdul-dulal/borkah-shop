import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import shop from "../../../assets/img/slider/borkha-slider-1.jpg";
import CategoryItems from "./CategoryItems";
const Category = () => {
  const [items, setItem] = useState([]);
  const [isLoading, setIloading] = useState(false);
  const { category } = useParams();
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/product/api/v1/getbyCategory?category=${category}`
      )
      .then((res) => setItem(res.data));
    setIloading(true);
  }, [category]);
  return (
    <div className="relative">
      <div
        className="h-64 w-full   "
        style={{
          background: `url(${shop})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute top-0 left-0 h-64 w-full bg-black opacity-[.8] flex items-center">
        <div className="md:px-20 px-8">
          <h1 className="text-white text-2xl font-semibold first-letter:uppercase">
            {category}
          </h1>
          <ul className="flex gap-3 text-white mt-3">
            <Link to="/">Home ></Link>
            <Link to="/shop">Product ></Link>
            <li className="first-letter:uppercase">{category} </li>
          </ul>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 md:px-20 px-8  my-16 relative">
        {items.map((item) => (
          <CategoryItems key={item._id} item={item} loading={isLoading} />
        ))}
      </div>
    </div>
  );
};

export default Category;
