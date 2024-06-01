"use client";

import React from "react";
import { useSwiper } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const SliderControls = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute w-full my-auto top-0 bottom-0 left-0 right-0 flex justify-between items-center z-50 pointer-events-none">
      <button
        className="pointer-events-auto bg-gradient-to-r from-[#0E0E0E] to-transparent h-full"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="size-16 stroke-2" />
      </button>
      <button
        className="pointer-events-auto bg-gradient-to-l from-[#0E0E0E] to-transparent h-full"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="size-16 stroke-2" />
      </button>
    </div>
  );
};

export default SliderControls;
