import React from "react";
import sale from "../../../assets/img/featured/ne-bg-bnr-img.jpg";
const SeasonSale = () => {
  return (
    <div
      className="h-[80vh] flex justify-center items-center "
      style={{
        background: `url(${sale})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="">
        <h2 className="text-4xl font-extrabold text-primary text-center my-2">
          New Season Sale
        </h2>
        <h1 className="text-[52px] font-extrabold text-white text-center">
          25% OFF
        </h1>
        <div className="text-white text-center px-20 space-y-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            nisi distinctio magni, iure
          </p>
          <p className="sm:flex hidden">
            deserunt doloribus optio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolores nisi
          </p>
          <p>distinctio magni, iure deserunt doloribus optio</p>
        </div>
      </div>
    </div>
  );
};

export default SeasonSale;
