import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../shere/Loading";
import CategoryItems from "./CategoryItems";

const ResentProduct = () => {
  const [resentProduct, setResentProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://borkha-shop.onrender.com/product/api/v1/getAllProudct")
      .then((res) => {
        setResentProduct(res.data.slice(27, 45));
        setLoading(true);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 lg:px-20 px-10 my-14 ">
          {resentProduct.map((item) => (
            <CategoryItems item={item} loading={loading} key={item._id} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ResentProduct;
