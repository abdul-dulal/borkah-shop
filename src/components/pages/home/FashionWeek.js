import React from "react";
import { useNavigate } from "react-router-dom";
import women from "../../../assets/img/featured/bb-img.jpg";
const FashionWeek = () => {
  const navigate = useNavigate();
  return (
    <div
      className="md:h-[86vh] h-auto w-full flex justify-center items-center md:my-0 py-5 max-w-screen-2xl mx-auto"
      style={{
        background: `url(${women})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="">
        <h2 className="text-4xl font-extrabold text-white text-center my-2">
          Fashion Week
        </h2>
        <h1 className="lg:text-4xl md:text-3xl text-2xl my-5 font-extrabold text-black text-center">
          JEANS STARTING AT $39
        </h1>
        <div className="text-white text-center  md:px-60 px-40 space-y-1 ml-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            nisi distinctio magni, iure
          </p>
          <p className="sm:flex hidden">
            deserunt doloribus optio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolores nisi
          </p>
          <p className="pb-6">
            distinctio magni, iure deserunt doloribus optio
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-primary w-44 h-12 rounded hover:bg-black  text-white mt-3 "
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FashionWeek;
