import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsStopwatch } from "react-icons/bs";
import { GoTriangleRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Loading from "../../shere/Loading";
import Title from "../../shere/Title";

const Blog = () => {
  const [blogs, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://borkha-shop.onrender.com/blog/getAllBlog")
      .then((res) => {
        setBlog(res.data.slice(0, 3));
        setLoading(true);
      });
  }, []);
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
    <div>
      <Title title="From The Blog" />
      {loading ? (
        <div className="grid md:grid-cols-3 grid-cols-1 lg:px-20 px-10 gap-10 my-14">
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
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Blog;
