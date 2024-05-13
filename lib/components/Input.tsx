"use client";

import React from "react";
import Icon, { IconName } from "./Icon";

interface InputProps {
  icon?: IconName;
  placeholder?: string;
}

const Input = ({ icon, placeholder }: InputProps) => {
  return (
    <div className="relative w-full h-10 bg-[#252525]/60 rounded-lg overflow-hidden border border-white/20">
      {icon ? (
        <div className="absolute top-0 bottom-0 left-0 my-auto ml-2 h-5 w-5 flex justify-center items-center aspect-square">
          <Icon icon={icon} />
        </div>
      ) : null}
      <input
        className="w-full h-full bg-transparent outline-none placeholder:text-[#A0A0A0] pl-8 pr-2"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
