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

export default function App() {
  return (
    <div className="-z-[10000]">
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
  );
}
