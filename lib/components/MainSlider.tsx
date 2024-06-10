"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import Button from "./Button";
import getItemData from "../utils/getItemData";
import { motion, AnimatePresence } from "framer-motion";

const MainSlider = () => {
  const [data, setData] = useState<any>([]);
  const [images, setImages] = useState<any>({});
  useEffect(() => {
    getItemData("movies").then(async (res) => {
      setData(res);
      await fetchImages();
    });
    const fetchImages = async () => {
      const imagePromises = data.map(async (item: any) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${item.id}/images?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        const json = await response.json();
        return { id: item.id, filePath: json.logos[0]?.file_path || "" };
      });

      const imageResults = await Promise.all(imagePromises);
      const imagesMap = imageResults.reduce((acc, img) => {
        acc[img.id] = img.filePath;
        return acc;
      }, {});

      setImages(imagesMap);
    };
  }, []);
  return (
    <div className="w-full aspect-video lg:aspect-[21/9] max-w-full">
      <AnimatePresence>
        {data && (
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
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
                      className="aspect-video lg:aspect-[21/9] object-cover w-full"
                      src={
                        "https://image.tmdb.org/t/p/w1280" + item.backdrop_path
                      }
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end space-y-4 p-16 bg-gradient-to-t from-[#0E0E0E] via-[#0e0e0ed0] to-transparent">
                    {typeof images[item.id] === "string" && (
                      <img
                        className="w-[200px] object-contain"
                        src={`https://image.tmdb.org/t/p/w1280${
                          images[item.id]
                        }`}
                        alt=""
                      />
                    )}
                    <div className="text-white/60">Sci-Fi, Animation</div>
                    <div className="line-clamp-2 max-w-[600px]">
                      {item.overview}
                    </div>
                    <div className="flex space-x-4">
                      <Button icon="play" size="large">
                        Play Now
                      </Button>
                      <Button
                        variant="secondary"
                        icon="bookmarkOutline"
                        size="large"
                      >
                        Bookmark
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainSlider;
