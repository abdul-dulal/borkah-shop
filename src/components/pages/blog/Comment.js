import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Comment = ({ desc }) => {
  const [allBlog, setallBlog] = useState([]);

  useEffect(() => {
    axios
      .get("https://borkha-shop.onrender.com/blog/getAllBlog")
      .then((res) => setallBlog(res.data));
  }, []);

  return (
    <div>
      <div className="flex gap-3 mt-5 items-center">
        <p className="text-[12px] font-bold">Category</p>
        <div className="flex gap-1">
          {allBlog[7]?.category.map((item) => (
            <ul className="text-sm font-medium" key={item._id}>
              <Link
                to="/category"
                state={{ category: item }}
                className="text-primary   cursor-pointer hover:text-black"
              >
                {item}
              </Link>
            </ul>
          ))}
        </div>
      </div>

      <h1 className="text-2xl my-3 font-bold">Leave a Reply </h1>
      <form>
        <textarea
          name=""
          className="w-full h-24 border-2 outline-offset-0 outline-primary px-3 py-1 ring-0"
          placeholder="Your comment here..."
        ></textarea>
        <input
          type="text"
          name=""
          className="w-72 h-10 mt-4 border px-3"
          placeholder="Name"
          required
        />
        <input
          type="email"
          className="w-72 h-10 ml-5 border px-3"
          name=""
          placeholder="Email"
          required
        />
        <input
          type="text"
          className="w-72 h-10 ml-5 border px-3"
          name=""
          placeholder="Website"
        />
        <input
          type="submit"
          value="Post Comment"
          className=" text-base uppercase h-10 w-40 cursor-pointer rounded bg-primary mt-3 text-white"
        />
      </form>
    </div>
  );
};

export default Comment;
