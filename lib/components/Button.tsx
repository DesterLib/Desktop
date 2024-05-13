"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Icon, { IconName } from "./Icon";

const button = cva(
  [
    "rounded-lg",
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
          "backdrop-blur-lg",
          "border",
          "border-white/20",
        ],
      },
      size: {
        small: ["text-base", "py-2", "px-4", "h-10"],
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
      <div className="mr-2 h-5 w-5 flex justify-center items-center aspect-square">
        <Icon icon={icon} />
      </div>
    ) : (
      ""
    )}
    {children}
  </button>
);

export default Button;
