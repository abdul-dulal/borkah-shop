import React from "react";
import BestProduct from "./BestProduct";
import FashionWeek from "./FashionWeek";
import FeaturedProduct from "./FeaturedProduct";
import Feedback from "./Feedback";
import Heilight from "./Heilight";
import HijabItem from "./HijabItem";
import SeasonSale from "./SeasonSale";
import TopCategory from "./TopCategory";
import Slider from "./Slider";
import Productbrand from "./Productbrand";
import Blog from "./Blog";
const Home = () => {
  return (
    <div>
      {/* <Slider /> */}
      <TopCategory />
      {/* <FeaturedProduct /> */}
      {/* <HijabItem /> */}
      {/* <SeasonSale /> */}
      {/* <Heilight /> */}
      {/* <FashionWeek /> */}
      {/* <BestProduct /> */}
      <Feedback />
      <Productbrand />
      <Blog />
    </div>
  );
};

export default Home;
