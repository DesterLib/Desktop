"use client";

import React, { useState } from "react";
import { Input } from "@headlessui/react";
import Link from "next/link";

const RouterInput = () => {
  const [url, setUrl] = useState("/");
  return (
    <div className="flex fixed bottom-2 right-2 w-fit z-[1000] ring ring-blue-500 rounded-lg">
      <Input
        className="w-[200px] p-2 rounded-l-lg text-black"
        name="full_name"
        type="text"
        defaultValue="/"
        onInput={(e) => setUrl(e.target.value)}
      />
      <Link href={url} className="py-2 px-4 rounded-r-lg bg-blue-500">
        Go
      </Link>
    </div>
  );
};

export default RouterInput;
