"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import NavigationMenu from "./Menus/NavigationMenu";
import Logo from "./Logo";
import { Button } from "@headlessui/react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const nav = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Browse",
      route: "/browse",
    },
    {
      label: "Libraries",
      route: "/libraries",
    },
  ];

  const pathname = usePathname();
  const router = useRouter();

  const setNavActive = (navItem: any) => {
    if (navItem.route === pathname) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="fixed top-2 left-2 flex justify-center items-center z-50 h-14 w-14 bg-black/60 data-[open]:bg-white/20 backdrop-blur-lg rounded-full focus:outline-none transition-colors"
      >
        <Logo />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 1,
              scale: 0.4,
              x: "-80%",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.4,
              x: "-80%",
            }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="flex top-2 left-0 right-0 mx-auto fixed space-x-2 w-fit z-40 bg-black/60 backdrop-blur-lg rounded-full p-2"
          >
            {nav.map((navItem, index) => (
              <button
                key={index}
                className={`py-2 rounded-full flex justify-center items-center relative hover:text-white will-change-[opacity] transition-colors w-fit px-4 ${
                  setNavActive(navItem) ? "text-white" : "text-white/40"
                }`}
                onClick={() => router.push(navItem.route)}
              >
                {setNavActive(navItem) && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-0 bg-white rounded-full mix-blend-difference"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {navItem.label}
              </button>
            ))}
            <button className="px-2 py-2 flex rounded-full hover:bg-white/20 active:bg-white active:text-black transition-colors">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </span>
              <span className="px-2">Search</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            className="flex fixed top-2 right-2 z-50"
          >
            <NavigationMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
