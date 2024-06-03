"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SliderControls from "./SliderControls";
import CollectionCard from "./Cards/CollectionCard";

const CollectionSlider = ({ title, data, gradiant, type }: any) => {
  return (
    <section className="w-full space-y-4 relative z-0">
      <div
        className={`text-4xl px-16 font-semibold ${
          gradiant
            ? "bg-gradient-to-r from-blue-400 via-indigo-400 to-white text-transparent bg-clip-text animate-gradient"
            : "text-white"
        }`}
      >
        {title}
      </div>
      <Swiper
        className="!rounded-xl !px-16 w-full group/slider"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          580: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
      >
        {data.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <CollectionCard item={item} type={type} />
          </SwiperSlide>
        ))}
        <SliderControls />
      </Swiper>
    </section>
  );
};

export default CollectionSlider;
