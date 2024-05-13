import React from "react";
import IconButton from "./IconButton";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className="w-[68px] h-full p-2 space-y-2">
      <div className="aspect-square flex justify-center items-center p-2.5">
        <Logo />
      </div>
      <div className="space-y-2 p-0.5">
        <IconButton variant="nav" icon="home" />
        <IconButton variant="nav" icon="browse" />
        <IconButton variant="nav" icon="bookmarks" />
        <IconButton variant="nav" icon="browse" />
      </div>
    </div>
  );
};

export default Sidebar;
