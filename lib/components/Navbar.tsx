import React from "react";
import Input from "./Input";

const Navbar = () => {
  return (
    <div className="h-[68px] p-4 w-full flex items-center justify-between">
      <div className="text-4xl font-bold">Home</div>
      <div className="w-[400px]">
        <Input icon="search" placeholder="Search..." />
      </div>
      <div className="h-full aspect-square border border-white/20 rounded-full">
        <img
          className="object-cover w-full h-full rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXM3-B13BV6qAmRklMrE_n4DLgE7JhogNT37LmHOz7rw&s"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
