"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import NavigationMenu from "./Menus/NavigationMenu";
import Logo from "./Logo";
import { Button, Input } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSearch, setIsSearch] = useState(false);

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
            className="flex top-2 left-0 right-0 mx-auto fixed w-fit z-40 bg-black/60 backdrop-blur-lg rounded-full p-2"
          >
            <AnimatePresence>
              {!isSearch && (
                <motion.div
                  className="flex space-x-2"
                  initial={{
                    opacity: 0,
                    width: 0,
                  }}
                  animate={{
                    opacity: 1,
                    width: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    width: 0,
                  }}
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
              )}
            </AnimatePresence>
            <div className="flex">
              <motion.div
                variants={{
                  open: { width: "400px", opacity: 1, pointerEvents: "auto" },
                  close: { width: 0, opacity: 0, pointerEvents: "none" },
                }}
                animate={isSearch ? "open" : "close"}
              >
                <Input
                  className="w-full h-full rounded-full bg-white/20 px-6"
                  type="text"
                />
              </motion.div>
              <motion.button
                onClick={() => setIsSearch((isSearch) => !isSearch)}
                className="ml-2 px-4 py-2 flex items-center justify-center rounded-full hover:bg-white/20 active:bg-white active:text-black transition-colors overflow-hidden"
              >
                <AnimatePresence initial={false}>
                  {isSearch ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "fit-content" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex space-x-2"
                    >
                      <XMarkIcon className="size-6 stroke-2" />
                      <span>Close</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="search"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex space-x-2"
                    >
                      <MagnifyingGlassIcon className="size-6 stroke-2" />
                      <span>Search</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
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
