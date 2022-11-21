import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import CategoryItems from "../home/CategoryItems";
import Sidebar from "../home/Sidebar";

const Index = () => {
  const [products, setProduct] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [rangeitem, setRangeItem] = useState();
  const [loading, setLoading] = useState(false);
  console.log(rangeitem);
  let limit = 12;
  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `http://localhost:3000/product/pagination?page=1&limit=${limit}`
      );
      const data = await res.json();
      setLoading(true);
      setpageCount(Math.ceil(46 / limit));
      setProduct(data.results);
    };
    getComments();
  }, [limit]);
  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3000/product/pagination?page=${currentPage}&limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const pageItem = await fetchComments(currentPage);

    setProduct(pageItem.results);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 my-10  lg:px-20 px-10">
        <div className="col-span-1">
          <Sidebar
            range={true}
            rangeitem={rangeitem}
            setRangeItem={setRangeItem}
          />
        </div>
        <div className="col-start-2 col-end-4  ">
          <div>
            <div className="grid grid-cols-4  gap-4">
              {products.map((product) => (
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

export default Index;
