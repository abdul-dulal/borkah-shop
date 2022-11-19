import React from "react";
import Featuredbanner from "../home/Featuredbanner";
import Showblog from "./Showblog";

const Blog = () => {
  return (
    <div>
      <Featuredbanner name="blog" />
      <div className="lg:px-20 px-10">
        <Showblog />
      </div>
    </div>
  );
};

export default Blog;
