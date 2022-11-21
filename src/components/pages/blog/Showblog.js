// import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GoTriangleRight } from "react-icons/go";
import ReactPaginate from "react-paginate";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Showblog = () => {
  const [blogs, setblog] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const navigate = useNavigate();
  const handleblog = (id) => {
    navigate(`/blog/${id}`);
  };
  let limit = 6;
  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `http://localhost:3000/blog/allData?page=1&limit=${limit}`
      );
      const data = await res.json();
      setpageCount(Math.ceil(8 / limit));
      setblog(data.results);
    };

    getComments();
  }, [limit]);
  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3000/blog/allData?page=${currentPage}&limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const pageItem = await fetchComments(currentPage);

    setblog(pageItem.results);
  };
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 my-16 items-center">
        {blogs.map((blog) => (
          <div>
            <img src={blog.blogImg} alt="" />
            <p className="flex items-center my-3 gap-1">
              <BsStopwatch />
              {new Date(blog.createdAt).toLocaleDateString(
                "en-US",
                DATE_OPTIONS
              )}
            </p>
            <h1
              className="text-xl font-semibold my-1 hover:text-primary line-clamp-1   cursor-pointer"
              onClick={() => handleblog(blog._id)}
            >
              {blog.blogTitle}
            </h1>
            <p className="leading-7	text-[15px] ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.…
            </p>
            <button
              onClick={() => handleblog(blog._id)}
              className="flex items-center text-base font-bold text-primary mt-2 hover:translate-x-3 duration-700 hover:text-black"
            >
              Read More <GoTriangleRight />
            </button>
          </div>
        ))}
      </div>
      <div className="my-10 ">
        <ReactPaginate
          previousLabel={<FaAngleLeft />}
          nextLabel={<FaAngleRight />}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          previousClassName={"text-2xl font-bold"}
          nextClassName={"text-2xl font-bold"}
          containerClassName={"flex justify-center items-center gap-5"}
          pageClassName={"text-xl font-bold flex justify-center "}
          activeClassName={"h-8 w-8 rounded-full  bg-primary -pt-6 text-white"}
        />
      </div>
    </div>
  );
};

export default Showblog;
