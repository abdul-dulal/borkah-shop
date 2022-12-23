import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsStopwatch } from "react-icons/bs";
import { GoTriangleRight } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import BlogSidebar from "./BlogSidebar";

const BlogCategory = () => {
  const [cateogryBlog, setCategoryBlog] = useState([]);
  const { category } = useLocation().state;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://borkha-shop.onrender.com/blog/getcategory?category=${category}`
      )
      .then((res) => setCategoryBlog(res.data));
  }, [category]);
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const handleblog = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div className="grid xl:grid-cols-3 grid-cols-1 gap-10 my-14 lg:px-20 px-10 max-w-screen-2xl  mx-auto">
      <div className="col-span-2 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 first-letter: gap-10 ">
          {cateogryBlog.map((blog) => (
            <div key={blog._id}>
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
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.…
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
      </div>
      <div className="w-full">
        <BlogSidebar />
      </div>
    </div>
  );
};

export default BlogCategory;
