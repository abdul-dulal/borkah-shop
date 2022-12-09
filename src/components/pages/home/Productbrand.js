import React from "react";
import Title from "../../shere/Title";
import Slider from "react-slick";
import brand1 from "../../../assets/img/featured/arong.jpg";
import brand2 from "../../../assets/img/featured/febric.jpg";
import brand3 from "../../../assets/img/featured/kx.jpg";
import brand4 from "../../../assets/img/featured/mirror.jpg";
import brand5 from "../../../assets/img/featured/trandez.jpg";
import { useNavigate } from "react-router-dom";
const Productbrand = () => {
  const navigate = useNavigate();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: true,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#F4F4F4] max-w-screen-2xl mx-auto">
      <Title title="Top Products Brands" />
      <div className="lg:px-20 px-10 py-20">
        <Slider {...settings}>
          <div className="cursor-pointer" onClick={() => navigate("/shop")}>
            <img src={brand1} alt="" />
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/shop")}>
            <img src={brand2} alt="" />
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/shop")}>
            <img src={brand3} alt="" />{" "}
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/shop")}>
            <img src={brand4} alt="" />
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/shop")}>
            <img src={brand5} alt="" />
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/shop")}>
            <img src={brand1} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Productbrand;
