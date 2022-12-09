import React from "react";
import Slider from "react-slick";
import bg from "../../../assets/img/featured/black-background-02.jpg";
import FeedbackSpace from "./FeedbackSpace";
import review1 from "../../../assets/img/featured/hijab-prod01.jpg";
import review2 from "../../../assets/img/featured/customer-img-02.jpg";
import review3 from "../../../assets/img/featured/customer-img-01.jpg";
export default function Feedback() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="h-auto lg:py-40  w-full md:py-32 sm:py-20 py-16 xl:px-20 px-14 max-w-screen-2xl mx-auto "
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Slider {...settings}>
        <div className="">
          <FeedbackSpace img={review1} name="Esrat Sultana" />
        </div>
        <div className="">
          <FeedbackSpace img={review2} name="Tasfia Tabassum" />
        </div>
        <div className="">
          <FeedbackSpace img={review3} name="Nusrat Jahan" />
        </div>
      </Slider>
    </div>
  );
}
