import React from "react";

const Logo = ({ width = "30", height = "30" }) => {
  return (
    <svg
      className="pointer-events-none"
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 11.315C25 18.3207 18.4625 24 11.7478 24C5.03306 24 3.48029 18.3207 3.48029 11.315C3.48029 4.30928 5.03306 0 11.7478 0C18.4625 0 25 4.30928 25 11.315Z"
        fill="white"
      />
      <rect
        x="1"
        y="7.45886"
        width="16.0486"
        height="9.08246"
        rx="4.54123"
        fill="url(#paint0_linear_8_51)"
        stroke="white"
        strokeWidth="1.87013"
      />
      <defs>
        <linearGradient
          id="paint0_linear_8_51"
          x1="3.45593"
          y1="7.45886"
          x2="15.5735"
          y2="16.0496"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFB3" />
          <stop offset="1" stopColor="#00DBAF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
