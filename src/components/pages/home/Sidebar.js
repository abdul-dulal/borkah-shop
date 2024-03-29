import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopRated from "./TopRated";
import { TfiAngleRight } from "react-icons/tfi";
import Pagination from "../shop/Pagination";
import ProductCategory from "../../shere/ProductCategory";
const Sidebar = ({
  categoryItem,
  products,
  range,
  lowest,
  setlowest,
  highest,
  setHighest,
}) => {
  const [topRated, setToprated] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://borkha-shop.onrender.com/product/api/v1/topRatedProduct?category=${categoryItem}&price=1000`
      )
      .then((res) => setToprated(res.data));
  }, [categoryItem]);

  const handleSearch = () => {
    if (searchTerm) {
      return navigate(`/searchby/${searchTerm}`);
    }
  };
  return (
    <div className="bg-[#F7F7F7] px-10 pt-4 pb-10">
      <span className="flex  items-center">
        <input
          type="text"
          name="search"
          id=""
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Product..."
          className="h-12  outline-none w-10/12 border-2   my-8 px-3 focus:outline-offset-0 focus:outline-primary ring-0"
        />

        <TfiAngleRight
          onClick={handleSearch}
          className="bg-primary font-bold cursor-pointer  text-white h-[46px] ml-1 w-6 "
        />
      </span>

      {range && (
        <Pagination
          lowest={lowest}
          setlowest={setlowest}
          highest={highest}
          setHighest={setHighest}
        />
      )}
      <p className="text-2xl font-bold mt-6 mb-3">Product Categories</p>
      <p className="h-[1.5px] w-20 bg-primary"></p>
      <hr className="" />
      <ProductCategory />
      <div>
        <p className="text-2xl font-bold my-3">Top Rated Products</p>
        <p className="h-[1.5px] w-20 bg-primary"></p>
        <hr />

        {range ? (
          <div className="mt-8">
            {products?.slice(0, 3).map((product) => (
              <TopRated item={product} key={product._id} />
            ))}
          </div>
        ) : (
          <div className=" mt-8">
            {topRated?.map((item) => (
              <TopRated item={item} key={item._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
