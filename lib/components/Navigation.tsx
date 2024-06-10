"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import NavigationMenu from "./Menus/NavigationMenu";
import Logo from "./Logo";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import useAppStore from "../stores/appStore";

const Search = ({ isSearch, setIsSearch }: any) => {
  return (
    <>
      <AnimatePresence>
        <motion.input
          variants={{
            open: {
              width: "auto",
              opacity: 1,
            },
            close: { width: 0, opacity: 0 },
          }}
          animate={isSearch ? "open" : "close"}
          className="rounded-full bg-white/20 indent-4"
        ></motion.input>
      </AnimatePresence>
      <button
        onClick={() => setIsSearch(!isSearch)}
        className="ml-2 pl-2 pr-4 py-2 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors overflow-hidden w-28"
      >
        {isSearch ? (
          <span className="flex space-x-2">
            <XMarkIcon className="size-6 stroke-2" />
            <span>Close</span>
          </span>
        ) : (
          <span className="flex space-x-2">
            <MagnifyingGlassIcon className="size-6 stroke-2" />
            <span>Search</span>
          </span>
        )}
      </button>
    </>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const isNavActive = (route: string) => route === pathname;

  const { nav } = useAppStore();

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 400);
  }, []);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-2 left-2 flex justify-center items-center z-50 h-14 w-14 bg-black/60 data-[open]:bg-white/20 backdrop-blur-lg rounded-full focus:outline-none transition-colors"
      >
        <Logo />
      </button>
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
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
            className="flex top-2 left-0 right-0 mx-auto fixed w-fit z-40 bg-black/60 backdrop-blur-lg rounded-full p-2"
          >
            <AnimatePresence>
              <motion.div
                className="flex space-x-2"
                variants={{
                  show: { width: "auto", opacity: 1, pointerEvents: "auto" },
                  hidden: { width: 0, opacity: 0, pointerEvents: "none" },
                }}
                animate={isSearch ? "hidden" : "show"}
              >
                {nav.map((navItem, index) => (
                  <button
                    key={index}
                    className={`py-2 rounded-full flex justify-center items-center relative hover:text-white will-change-[opacity] transition-colors w-fit px-4 ${
                      isNavActive(navItem.route)
                        ? "text-white"
                        : "text-white/40"
                    }`}
                    onClick={() => router.push(navItem.route)}
                  >
                    {isNavActive(navItem.route) && (
                      <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-0 bg-white rounded-full mix-blend-difference"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    {navItem.label}
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
            <Search isSearch={isSearch} setIsSearch={setIsSearch} />
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
    </div>
  );
};

export default Navigation;
