import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Title from "../../shere/Title";
import CategoryItems from "./CategoryItems";

const BestProduct = () => {
  const [bestProduct, setbestProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/product/api/v1/getAllProudct")
      .then((res) => setbestProduct(res.data.slice(27, 45)));
    setLoading(true);
  }, []);
  return (
    <div>
      <Title title="Best choice Products" />
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 lg:px-20 px-10 my-14 ">
        {bestProduct.map((product) => (
          <CategoryItems
            item={product}
            loading={loading}
            key={bestProduct._id}
          />
        ))}
      </div>
    </div>
  );
};

export default BestProduct;
