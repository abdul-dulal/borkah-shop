import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../shere/Loading";
import Title from "../../shere/Title";
import CategoryItems from "./CategoryItems";

const HijabItem = () => {
  const [hijab, setHijab] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://borkha-shop.onrender.com/product/api/v1/hijabItem?category=hijab&category=niqab"
      )
      .then((res) => {
        setHijab(res.data);
        setLoading(true);
      });
  }, []);
  return (
    <div className="bg-[#F4F4F4] py-10 max-w-screen-2xl mx-auto">
      <Title title="Hijab Items" />
      <div>
        {loading ? (
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10 lg:px-20 px-10 my-14 ">
            {hijab.map((hijabItem) => (
              <CategoryItems
                item={hijabItem}
                key={hijabItem._id}
                loading={loading}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default HijabItem;
