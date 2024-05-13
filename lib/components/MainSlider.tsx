"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { extractColors } from "extract-colors";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import useBackgroundStore from "@/stores/backgroundStore";

export const MainSlider = ({ data }: any) => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    extractColors(data[currentImage].wallpaper)
      .then((res) => {
        useBackgroundStore.setState({ colors: res });
      })
      .catch(console.error);
    console.log(currentImage);
  }, [currentImage]);
  return (
    <div className="w-full rounded-xl overflow-hidden max-h-[600px]">
      <Splide
        className="w-full"
        aria-label="MainSlider"
        onActive={(_, res) => {
          setCurrentImage(res.index);
        }}
        options={{
          type: "fade",
        }}
      >
        {data.map((item, index) => (
          <SplideSlide key={index}>
            <img
              className="object-cover w-full h-full aspect-[24/9]"
              src={item.wallpaper}
              alt="one"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
