"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "./Card";

const Slider = ({ title, data }: any) => {
  return (
    <section className="w-full space-y-4">
      <div className="text-2xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-400 to-white text-transparent bg-clip-text animate-gradient">
        {title}
      </div>
      <Swiper
        className="!rounded-xl"
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
        navigation={true}
      >
        {data.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
