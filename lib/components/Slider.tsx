"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ContentCard from "./Cards/ContentCard";
import SliderControls from "./SliderControls";
import getItemData from "../utils/getItemData";

const Slider = ({ title, gradiant, type }: any) => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    if (type === "movie") {
      getItemData("movies").then(async (res) => {
        setData(res);
      });
    } else {
      getItemData("tv").then(async (res) => {
        setData(res);
      });
    }
  }, []);
  return (
    <section className="w-full space-y-2 relative z-0">
      <div
        className={`text-4xl/normal px-16 font-semibold ${
          gradiant
            ? "bg-gradient-to-r from-blue-400 via-indigo-400 to-white text-transparent bg-clip-text animate-gradient"
            : "text-white"
        }`}
      >
        {title}
      </div>
      <Swiper
        className="!rounded-xl !px-16 w-full"
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
            <ContentCard item={item} type={type} />
          </SwiperSlide>
        ))}
        <SliderControls />
      </Swiper>
    </section>
  );
};

export default Slider;
