import React from "react";
import ProductCategory from "../../shere/ProductCategory";
import TopRated from "../home/TopRated";

const SearchSiderbar = ({ topRated }) => {
  return (
    <div className="bg-[#F7F7F7] px-10 pt-4 pb-10">
      <p className="text-2xl font-bold mt-6 mb-3">Product Categories</p>
      <p className="h-[1.5px] w-20 bg-primary"></p>
      <hr className="" />
      <ProductCategory />
      <div>
        <p className="text-2xl font-bold my-3">Top Rated Products</p>
        <p className="h-[1.5px] w-20 bg-primary"></p>
        <hr />

        <div className=" mt-8">
          {topRated.slice(0, 4)?.map((item) => (
            <TopRated item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSiderbar;
