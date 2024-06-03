import React from "react";

const CollectionCard = ({ item }: any) => {
  return (
    <div className="w-full space-y-2 group/card hover:cursor-pointer">
      <div className="relative rounded-xl aspect-video overflow-hidden flex justify-center items-center bg-white">
        <img
          className="object-contain group-hover/slider:opacity-50 group-hover/card:opacity-100 transition-opacity w-2/3 h-2/3 z-10"
          src={item.logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default CollectionCard;
