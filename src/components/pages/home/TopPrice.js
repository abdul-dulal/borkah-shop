import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CategoryItems from "./CategoryItems";

const TopPrice = () => {
  const [topRated, setToprated] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://borkha-shop.onrender.com/product/api/v1/topRated")
      .then((res) => setToprated(res.data));
    setLoading(true);
  }, []);
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 lg:px-20 px-10 my-14 ">
      {topRated.map((product) => (
        <CategoryItems item={product} key={product._id} loading={loading} />
      ))}
    </div>
  );
};

export default TopPrice;
