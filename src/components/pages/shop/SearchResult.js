import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import CategoryItems from "../home/CategoryItems";
import SearchSiderbar from "./SearchSiderbar";

const SearchResult = () => {
  const [searchProduct, setSearchProduct] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { text } = useParams();

  let limit = 12;
  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `http://localhost:3000/product/search?name=${text}&page=1&limit=12`
      );
      const data = await res.json();
      console.log(data.results);
      setLoading(true);
      setpageCount(Math.ceil(46 / limit));
      setSearchProduct(data.results);
    };
    getComments();
  }, [limit, text]);
  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3000/product/search?page=${currentPage}&limit=${limit}&name=${text}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const pageItem = await fetchComments(currentPage);

    setSearchProduct(pageItem.results);
  };

  return (
    <div>
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
            <div className="my-16 flex justify-center ">
              <ReactPaginate
                previousLabel={<FaAngleLeft />}
                nextLabel={<FaAngleRight />}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                previousClassName={"text-2xl font-bold"}
                nextClassName={"text-2xl font-bold"}
                containerClassName={"flex justify-center items-center gap-5"}
                pageClassName={"text-xl font-bold flex justify-center "}
                activeClassName={
                  "h-8 w-8 rounded-full  bg-primary -pt-6 text-white"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
