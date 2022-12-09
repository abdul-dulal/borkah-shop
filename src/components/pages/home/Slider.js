import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./style.css";
import "swiper/css/lazy";
import slider1 from "../../../assets/img/slider/slider3.png";
import slider2 from "../../../assets/img/slider/slider2.png";
import slider3 from "../../../assets/img/slider/slider1.png";
import { Pagination } from "swiper";
import Slitdertext from "./Slitdertext";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="relative max-w-screen-2xl mx-auto">
      <div className="">
        <Swiper
          direction={"vertical"}
          spaceBetween={0}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay, Lazy]}
          loop={true}
          lazy={true}
          autoplay={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="h-[80vh] w-full flex items-center justify-center "
              style={{
                background: `url(${slider3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Slitdertext title="new arrivals borkha collection" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[80vh] w-full flex items-center justify-center "
              style={{
                background: `url(${slider2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Slitdertext title="exclisive borkha collection" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[80vh] w-full flex items-center justify-center "
              style={{
                background: `url(${slider1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Slitdertext title="new arrivals borkha collection" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute lg:bottom-32 bottom-16 left-[37%] lg:left-[45%]">
        <button
          className="bg-white w-44 h-12 rounded cursor-pointer text-primary mt-12"
          onClick={() => navigate("/shop")}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
