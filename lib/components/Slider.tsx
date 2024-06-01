"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "./Card";
import SliderControls from "./SliderControls";

const Slider = ({ title, data, gradiant }: any) => {
  return (
    <section className="w-full space-y-4 relative">
      <div
        className={`text-2xl px-16 font-semibold ${
          gradiant
            ? "bg-gradient-to-r from-blue-400 via-indigo-400 to-white text-transparent bg-clip-text animate-gradient"
            : "text-white"
        }`}
      >
        {title}
      </div>
      <Swiper
        className="!rounded-xl !px-16"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          580: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
      >
        {data.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Card item={item} />
          </SwiperSlide>
        ))}
        <SliderControls />
      </Swiper>
    </section>
  );
};

export default Slider;
