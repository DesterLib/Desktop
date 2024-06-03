import React from "react";
import Chip from "../Chip";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

const ContentCard = ({ item, type = "movie" }: any) => {
  return (
    <div className="w-full space-y-2 group hover:cursor-pointer">
      <div className="rounded-xl aspect-video overflow-hidden relative">
        <img
          className="object-cover h-full w-full group-hover:opacity-50 transition-opacity"
          src={"https://image.tmdb.org/t/p/w1280" + item.backdrop_path}
          alt=""
        />
        {type === "tv" && item.number_of_seasons !== 0 && (
          <Chip className="absolute top-2 left-2">
            {item.number_of_seasons}{" "}
            {item.number_of_seasons === 1 ? "Season" : "Seasons"}
          </Chip>
        )}
        <div className="absolute top-0 left-0 w-full h-full border rounded-xl border-zinc-400/20 transition-colors"></div>
        <Menu>
          {({ open }) => (
            <>
              <MenuButton className="absolute bottom-2 right-2 p-1 rounded-full bg-zinc-400 group-hover:bg-emerald-400 transition-colors drop-shadow-sm ring-emerald-500">
                <EllipsisHorizontalIcon className="size-6" />
              </MenuButton>
              <AnimatePresence>
                {open && (
                  <MenuItems
                    anchor="bottom end"
                    static
                    as={motion.div}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-52 z-50 origin-top-right rounded-xl border border-white/5 bg-zinc-700/60 backdrop-blur-xl p-1 text-sm/6 text-white [--anchor-gap:6px] focus:outline-none"
                  >
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                        Trailer
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                        Hide
                      </button>
                    </MenuItem>
                  </MenuItems>
                )}
              </AnimatePresence>
            </>
          )}
        </Menu>
      </div>
      <div>
        <div className="truncate">
          {type === "movie" ? item.title : item.name}
        </div>
        <div className="text-white/60 text-sm">
          {type === "movie"
            ? item.release_date.slice(0, 4)
            : item.first_air_date.slice(0, 4)}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
