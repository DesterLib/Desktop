"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Icon, { IconName } from "./Icon";

const button = cva(
  [
    "rounded-xl",
    "w-fit",
    "font-semibold",
    "flex",
    "justify-center",
    "items-center",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-white",
          "hover:bg-zinc-200",
          "active:bg-zinc-400",
          "text-black",
        ],
        secondary: [
          "hover:bg-white/20",
          "active:bg-white/40",
          "text-white",
          "backdrop-blur-sm",
          "border",
          "border-white/20",
        ],
      },
      size: {
        small: ["text-sm", "px-2", "h-8"],
        large: ["text-lg", "px-4", "h-12"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "small",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  icon?: IconName;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  icon,
  children,
  ...props
}) => (
  <button className={button({ variant, size, className })} {...props}>
    {icon ? (
      <div
        className={`mr-1 flex justify-center items-center aspect-square ${
          size === "large" ? "h-6 w-6" : "h-4 w-4"
        }`}
      >
        <Icon icon={icon} />
      </div>
    ) : (
      ""
    )}
    {children}
  </button>
);

export default Button;
