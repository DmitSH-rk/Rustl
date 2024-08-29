import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";

export default function MySwiper() {
  return (
    <div className="parent">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src="./img/i4.jpg" alt="huesos"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/i5.jpg" alt="huesos"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/i6.jpg" alt="huesos"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/i7.jpg" alt="huesos"></img>
        </SwiperSlide>
      </Swiper>
      <div className="brec">
        <div className="fontrec">Leman</div>
      </div>
    </div>
  );
}
