import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryItems from "../home/CategoryItems";
import SearchSiderbar from "./SearchSiderbar";

const SearchResult = () => {
  const [searchProduct, setSearchProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { text } = useParams();

  let limit = 12;
  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://borkha-shop.onrender.com/product/search?name=${text}&page=1&limit=12`
      );
      const data = await res.json();
      setLoading(true);
      setSearchProduct(data.results);
    };
    getComments();
  }, [limit, text]);

  return (
    <div>
      {searchProduct.length > 0 ? (
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-4 my-10  lg:px-20 px-10">
          <div className="lg:col-span-1 col-span-full  lg:order-first order-last">
            <SearchSiderbar topRated={searchProduct} />
          </div>
          <div className="lg:col-start-2 lg:col-end-4 w-full  ">
            <div>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                {searchProduct.map((product) => (
                  <CategoryItems
                    key={product._id}
                    item={product}
                    loading={loading}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-xl text-center">Not found search item</p>
      )}
    </div>
  );
};

export default SearchResult;
