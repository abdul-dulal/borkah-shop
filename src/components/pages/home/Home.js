import React from "react";
import BestProduct from "./BestProduct";
import FashionWeek from "./FashionWeek";
import FeaturedProduct from "./FeaturedProduct";
import Heilight from "./Heilight";
import HijabItem from "./HijabItem";
import SeasonSale from "./SeasonSale";
import Slider from "./Slider";
import TopCategory from "./TopCategory";
const Home = () => {
  return (
    <div>
      {/* <Slider /> */}
      <TopCategory />
      <FeaturedProduct />
      <HijabItem />
      <SeasonSale />
      <Heilight />
      <FashionWeek />
      <BestProduct />
    </div>
  );
};

export default Home;
