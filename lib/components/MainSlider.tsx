"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Button from "./Button";

const SwiperSlider = ({ data }: any) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[EffectFade, Navigation]}
      effect={"fade"}
      loop={true}
    >
      {data.map((item: any, index: number) => (
        <SwiperSlide className="relative" key={index}>
          <div className="w-full">
            <img
              className="aspect-video md:aspect-[21/9] object-cover w-full"
              src={"https://image.tmdb.org/t/p/w1280" + item.backdrop_path}
              alt={`Slide ${index + 1}`}
            />
          </div>
          <div className="aspect-video md:aspect-[21/9] absolute bottom-0 left-0 w-full h-full flex flex-col justify-end space-y-2 p-16 bg-gradient-to-t from-[#0E0E0E] via-[#0e0e0ed0] to-transparent">
            {/* <img className="w-[200px] object-contain" src={item.logo} alt="" /> */}
            <div className="text-white/60">Sci-Fi, Animation</div>
            <div className="line-clamp-2 max-w-[600px]">{item.overview}</div>
            <div className="flex space-x-4">
              <Button icon="play" size="large">
                Play Now
              </Button>
              <Button variant="secondary" icon="bookmarkOutline" size="large">
                Bookmark
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
