import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogSidebar = () => {
  const [allBlog, setallBlog] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://borkha-shop.onrender.com/blog/getAllBlog")
      .then((res) => setallBlog(res.data));
  }, []);
  const DATE_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <div className="bg-[#F7F7F7] w-full px-10 pt-4 pb-10">
      <p className="text-2xl font-bold my-3">Recent Posts</p>
      <p className="h-[1.5px] w-20 bg-primary"></p>

      <div className="">
        {allBlog.map((blog) => (
          <div key={blog._id} className="flex flex-wrap gap-x-4 py-3">
            <div className="">
              <img
                src={blog.blogImg}
                className="lg:w-24  object-fill w-[88px] objectFit-contain"
                alt=""
              />
            </div>
            <div className="w-8/12 ">
              <h1
                onClick={() => navigate(`/blog/${blog._id}`)}
                className="text-primary cursor-pointer hover:text-black"
              >
                {blog.blogTitle}
              </h1>
              <div className="flex gap-3 text-[12px]">
                <p>
                  {new Date(blog?.createdAt).toLocaleDateString(
                    "en-US",
                    DATE_OPTIONS
                  )}
                </p>
                <p>0 Comments</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-2xl font-bold my-3">Post Categories</p>
      <p className="h-[1.5px] w-20 bg-primary"></p>

      {allBlog[7]?.category.map((item) => (
        <ul className="space-y-2 mt-3" key={item._id}>
          <Link
            to="/category"
            state={{ category: item }}
            className="text-primary   cursor-pointer hover:text-black"
          >
            {item}
          </Link>
          <hr />
        </ul>
      ))}
      <p className="text-2xl font-bold my-3">Tags</p>
      <p className="h-[1.5px] w-20 bg-primary"></p>
      <div className="flex gap-4 flex-wrap mt-5">
        {allBlog[1]?.tags.map((item) => (
          <ul>
            <li className="bg-black hover:bg-primary  text-white px-4 py-2 cursor-pointer rounded">
              {item}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default BlogSidebar;
