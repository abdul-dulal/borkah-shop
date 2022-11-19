import React from "react";

const BlogSidebar = () => {
  return (
    <div className="bg-[#F7F7F7] px-10 pt-4 pb-10">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search Product..."
        className="h-12 w-full border-2 rounded  my-8 px-3 outline-offset-0 outline-primary ring-0"
      />
      <p className="text-2xl font-bold my-3">Recent Posts</p>
      <p className="h-[1.5px] w-20 bg-primary"></p>
    </div>
  );
};

export default BlogSidebar;
