"use client";

import React, { useRef, useState } from "react";
import Card from "./Card";

const Slider = ({ data, gradiantText, variant, title }: any) => {
  const sliderRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);

  const dragStart = () => setIsDrag(true);
  const dragEnd = () => setIsDrag(false);
  const drag = (ev) => isDrag && (sliderRef.current.scrollLeft -= ev.movementX);

  return (
    <section className="space-y-4">
      {gradiantText ? (
        <div className="text-2xl font-semibold bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-300 text-transparent bg-clip-text animate-gradient">
          {title}
        </div>
      ) : (
        <div className="text-2xl font-semibold">Weekly Recommendation</div>
      )}
      <div
        ref={sliderRef}
        onMouseDown={dragStart}
        onMouseUp={dragEnd}
        onMouseMove={drag}
        onMouseLeave={dragEnd}
        onBlur={dragEnd}
        className="overflow-x-scroll w-full"
      >
        <div className="w-fit flex space-x-4 pb-2">
          {data.map((item, index) => (
            <Card key={index} info={item} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
