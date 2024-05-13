"use client";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import useBackgroundStore from "@/stores/backgroundStore";

const Background = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const unsubscribe = useBackgroundStore.subscribe((state) => {
      setColors(state.colors);
    });
    return unsubscribe;
  }, []);

  const { background } = useSpring({
    background: `linear-gradient(145deg, ${colors[0]?.hex || "#0b0f12"} 0%, ${
      colors[1]?.hex || "#0b0f12"
    } 10%, #0b0f12 30%, #0b0f12 100%)`,
  });

  return (
    <animated.div
      id="wrapper"
      className="absolute w-full h-full left-0 top-0 opacity-50"
      style={{
        background,
      }}
    ></animated.div>
  );
};

export default Background;
