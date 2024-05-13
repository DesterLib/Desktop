import { createElement, type HTMLAttributes } from "react";
import { icons } from "../icons/icons";

export type IconName = keyof typeof icons;

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
  rotate?: number;
}

const Icon = ({ icon, className, rotate, ...rest }: Props) => {
  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
      {...rest}
    >
      {createElement(icons[icon], {
        style: { width: "100%", height: "100%" },
      })}
    </div>
  );
};

export default Icon;
