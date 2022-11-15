import React from "react";
import { useState } from "react";
import Title from "../../shere/Title";
import BestSelling from "./BestSelling";
import ResentProduct from "./ResentProduct";
import TopPrice from "./TopPrice";

const Heilight = () => {
  const [toggleText, setToggletext] = useState("bestSelling");
  return (
    <div>
      <Title title="This Week's Highlights" />
      <div className="sm:flex justify-center  my-6">
        <div className="">
          <button
            className={`bg-black text-white h-12 w-36 ${
              toggleText === "bestSelling"
                ? "bg-[#F766AD] text-white h-12 w-36"
                : ""
            }`}
            onClick={() => setToggletext("bestSelling")}
          >
            Best Selling
          </button>
          <button
            className={`bg-black text-white h-12 w-36 ml-6 ${
              toggleText === "topRated"
                ? "bg-[#F766AD] text-white h-12 w-36"
                : ""
            }`}
            onClick={() => setToggletext("topRated")}
          >
            Top Rated
          </button>
          <button
            className={`bg-black text-white h-12 w-44  ml-6 ${
              toggleText === "resent" ? "bg-[#F766AD] text-white h-12 w-36" : ""
            }`}
            onClick={() => setToggletext("resent")}
          >
            Resent Products
          </button>
        </div>
      </div>
      {toggleText == "bestSelling" && <BestSelling />}
      {toggleText == "topRated" && <TopPrice />}
      {toggleText == "resent" && <ResentProduct />}
    </div>
  );
};

export default Heilight;
