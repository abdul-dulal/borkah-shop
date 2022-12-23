import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Loading from "../../shere/Loading";
import Title from "../../shere/Title";
import CategoryItems from "./CategoryItems";

const FeaturedProduct = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://borkha-shop.onrender.com/product/api/v1/getAllProudct")
      .then((res) => {
        setFeatured(res.data.slice(9, 21));
        setLoading(true);
      });
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Title title=" Featured Products" />

      <div className="">
        {loading ? (
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 lg:px-20 px-10 my-14 ">
            {featured.map((item) => (
              <CategoryItems item={item} loading={loading} key={item._id} />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
