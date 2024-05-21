import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const chip = cva(
  [
    "rounded-full",
    "text-center",
    "w-fit",
    "text-xs",
    "font-medium",
    "uppercase",
    "backdrop-blur-lg",
  ],
  {
    variants: {
      variant: {
        neutral: [
          "bg-zinc-500/60",
          "text-gray-200",
          "border",
          "border-zinc-400/60",
        ],
        secondary: [
          "text-white",
          "backdrop-blur-sm",
          "border",
          "border-white/20",
        ],
      },
      size: {
        medium: ["px-4", "py-2"],
        small: ["px-1.5", "py-0.5"],
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "small",
    },
  }
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chip> {}

const Chip: React.FC<ChipProps> = ({
  className,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <div className={chip({ variant, size, className })} {...props}>
      {children}
    </div>
  );
};

export default Chip;
