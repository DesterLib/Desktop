"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Icon, { IconName } from "./Icon";

const button = cva(
  [
    "rounded-lg",
    "font-semibold",
    "flex",
    "justify-center",
    "items-center",
    "aspect-square",
    "transition-colors",
    "ease-out",
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
        nav: [
          "bg-transparent",
          "hover:bg-white",
          "hover:text-black",
          "text-white",
          "active:bg-zinc-400",
        ],
      },
      size: {
        medium: ["p-3"],
        small: ["p-1.5", "h-8", "w-8"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  icon?: IconName;
}

const IconButton: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  icon = "play",
  ...props
}) => (
  <button className={button({ variant, size, className })} {...props}>
    <Icon icon={icon} />
  </button>
);

export default IconButton;
