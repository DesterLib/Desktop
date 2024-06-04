import React from "react";

const CollectionCard = ({ item }: any) => {
  return (
    <div className="w-full space-y-2 group hover:cursor-pointer gradient-border relative aspect-video rounded-xl overflow-hidden">
      <img className="h-full w-full rounded-b-2xl" src={item.backdrop} alt="" />
      <div className="absolute bottom-0 left-0 right-0 h-20 py-6 w-full overflow-hidden flex justify-center items-center bg-black/60 backdrop-blur-xl">
        <img
          className="object-contain group-hover:scale-110 transition-transform w-2/3 h-full brightness-0 invert"
          src={item.logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default CollectionCard;
