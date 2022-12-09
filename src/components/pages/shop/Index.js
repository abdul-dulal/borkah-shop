import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import Loading from "../../shere/Loading";
import CategoryItems from "../home/CategoryItems";
import Sidebar from "../home/Sidebar";

const Index = () => {
  const [products, setProduct] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [lowest, setlowest] = useState(400);
  const [highest, setHighest] = useState(8000);
  const [loading, setLoading] = useState(false);

  let limit = 12;
  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `http://localhost:3000/product/pagination?page=1&limit=${limit}&lowest=${lowest}&highest=${highest}`
      );
      const data = await res.json();
      setLoading(true);
      setpageCount(Math.ceil(46 / limit));
      setProduct(data.results);
    };
    getComments();
  }, [limit, lowest, highest]);
  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3000/product/pagination?page=${currentPage}&limit=${limit}&lowest=${lowest}&highest=${highest}`
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
      <div className="grid lg:grid-cols-3 grid-cols-1  gap-4 my-10  lg:px-20 px-10 max-w-screen-2xl  mx-auto">
        <div className="lg:col-span-1 col-span-full  lg:order-first order-last">
          <Sidebar
            range={true}
            lowest={lowest}
            setlowest={setlowest}
            highest={highest}
            setHighest={setHighest}
            products={products}
          />
        </div>
        <div className="lg:col-start-2 lg:col-end-4 w-full  ">
          <div>
            {loading ? (
              <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                {products.map((product) => (
                  <CategoryItems
                    key={product._id}
                    item={product}
                    loading={loading}
                  />
                ))}
              </div>
            ) : (
              <Loading />
            )}
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
