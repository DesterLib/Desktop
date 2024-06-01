import Button from "@/lib/components/Button";
import Logo from "@/lib/components/Logo";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const SetupPage = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center p-4 h-screen bg-gradient-to-tr from-indigo-500 via-emerald-500 to-orange-500">
      <Logo width="100" height="100" />
      <Button className="space-x-1 group" size="large" variant="secondary">
        <div>Begin Setup</div>
        <ChevronRightIcon className="size-6 stroke-2 transition-transform group-hover:translate-x-2" />
      </Button>
    </div>
  );
};

export default SetupPage;
