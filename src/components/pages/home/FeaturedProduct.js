import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Title from "../../shere/Title";
import CategoryItems from "./CategoryItems";

const FeaturedProduct = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/product/api/v1/getAllProudct")
      .then((res) => setFeatured(res.data.slice(9, 21)));
    setLoading(true);
  }, []);
  return (
    <div>
      <Title title=" Featured Products" />

      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 lg:px-20 px-10 my-14 ">
        {featured.map((item) => (
          <CategoryItems item={item} loading={loading} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
