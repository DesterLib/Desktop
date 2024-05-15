"use client";

import { extractColors } from "extract-colors";
import "@splidejs/react-splide/css";
import { useEffect } from "react";
import useBackgroundStore from "@/stores/backgroundStore";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "./fade";
import IconButton from "../IconButton";

export const MainSlider = ({ data, options }: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

  const handleGetColors = (currentImagePosition: number) => {
    extractColors(data[currentImagePosition].wallpaper)
      .then((res) => {
        useBackgroundStore.setState({ colors: res });
      })
      .catch(console.error);
  };

  const handlePrevious = () => {
    emblaApi?.scrollPrev();
    handleGetColors(emblaApi?.selectedScrollSnap() as number);
  };

  const handleNext = () => {
    emblaApi?.scrollNext();
    handleGetColors(emblaApi?.selectedScrollSnap() as number);
  };

  useEffect(() => {
    handleGetColors(0);
  }, [emblaApi]);

  return (
    <div className="w-full rounded-xl overflow-hidden relative">
      <section className="embla relative">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {data.map((item: any, index: number) => (
              <div className="embla__slide relative" key={index}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-black to-transparent"></div>
                <img
                  className="embla__slide__img rounded-xl"
                  src={item.wallpaper}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="embla__controls absolute bottom-0 right-0">
          <div className="flex space-x-2 p-2">
            <IconButton
              icon="left"
              variant="secondary"
              size="small"
              onClick={handlePrevious}
            />
            <IconButton
              icon="right"
              variant="secondary"
              size="small"
              onClick={handleNext}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
