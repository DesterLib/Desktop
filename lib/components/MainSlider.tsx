"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import { extractColors } from "extract-colors";
import useBackgroundStore from "@/stores/backgroundStore";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Button from "./Button";

const SwiperSlider = ({ data, options }: any) => {
  // const handleGetColors = (currentImagePosition: number) => {
  //   extractColors(data[currentImagePosition].wallpaper)
  //     .then((res) => {
  //       useBackgroundStore.setState({ colors: res });
  //     })
  //     .catch(console.error);
  // };
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[EffectFade, Navigation]}
      effect={"fade"}
      navigation={true}
      loop={true}
    >
      {data.map((item: any, index: number) => (
        <SwiperSlide className="relative !h-[600px]" key={index}>
          {/* <img
            className="aspect-video md:aspect-[21/9] object-cover"
            src={item.wallpaper}
            alt={`Slide ${index + 1}`}
          /> */}
          {index === 2 && (
            <iframe
              className="object-cover w-[100vw] h-[100vh] absolute top-[50%] left-[50%] -z-10 -translate-x-[50%] -translate-y-[50%]"
              src="https://www.youtube.com/embed/JDcAlo8i2y8?autoplay=1"
              title="War for the Planet of the Apes | Official Trailer [HD] | 20th Century FOX"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          )}
          <div className="aspect-video md:aspect-[21/9] w-full h-full flex flex-col justify-end space-y-2 p-16 bg-gradient-to-t from-[#0E0E0E] via-[#0e0e0ed0] to-transparent">
            <img className="w-[200px] object-contain" src={item.logo} alt="" />
            <div className="text-white/60">Sci-Fi</div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              officia eum possimus.
            </div>
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
