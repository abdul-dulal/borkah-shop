import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryItems from "./CategoryItems";

const BestSelling = () => {
  const [bestSelling, setbestSelling] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://borkha-shop.onrender.com/product/api/v1/getAllProudct")
      .then((res) => setbestSelling(res.data.slice(3, 21)));
    setLoading(true);
  }, []);
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 lg:px-20 px-10 my-14 ">
      {bestSelling.map((item) => (
        <CategoryItems item={item} loading={loading} key={item._id} />
      ))}
    </div>
  );
};

export default BestSelling;
