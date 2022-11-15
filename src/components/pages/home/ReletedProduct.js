import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import ReleteProd from "./ReleteProd";

const ReletedProduct = ({ categoryItem }) => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/product/api/v1/getbyCategory?category=${categoryItem}`
      )
      .then((res) => setCategoryProduct(res.data));
    setloading(true);
  }, [categoryItem]);

  return (
    <div>
      <p className="text-2xl font-bold my-3">Releted Product</p>
      <p className="h-[1.5px] w-3/12 bg-primary"></p>
      <hr className="" />
      <div className="flex  gap-6 mt-10">
        {categoryProduct.slice(0, 3).map((product) => (
          <ReleteProd product={product} loading={loading} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default ReletedProduct;
