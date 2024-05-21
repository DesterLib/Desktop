import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  ArrowLeftStartOnRectangleIcon,
  Cog8ToothIcon,
  UserMinusIcon,
  ChevronDownIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SubMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <MenuItem>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setShowMenu(!showMenu);
          }}
          className="group gap-2 flex w-full items-center rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
        >
          <UserGroupIcon className="size-4 fill-white/30" />
          <span>Users</span>
          <ChevronDownIcon
            className={`size-4 fill-white/30 transition-transform ml-auto ${
              showMenu && "rotate-180"
            }`}
          />
        </Button>
      </MenuItem>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          >
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-1.5 data-[focus]:bg-white/10">
                <img
                  className="h-8 w-8 rounded-full p-0.5 bg-emerald-500"
                  src="https://i.pinimg.com/564x/97/f4/24/97f4249701d4f25e609a1b3dfd5d8c1f.jpg"
                  alt=""
                />
                <div className="text-left">
                  <p>Alken</p>
                </div>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-1.5 data-[focus]:bg-white/10">
                <img
                  className="h-8 w-8 rounded-full p-0.5 bg-white/20"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNtPB2ssUcADDcJNCMwrFgWjXbrRa0AA3oq2MjjGslw&s"
                  alt=""
                />
                <div className="text-left">
                  <p className="text-[14px]/[16px]">Ken</p>
                  <p className="text-[10px]/[12px] uppercase text-white/40">
                    Child
                  </p>
                </div>
              </button>
            </MenuItem>
            <MenuItem>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-1.5 data-[focus]:bg-white/10">
                <UserIcon className="size-4 fill-white/30 h-8 w-8 rounded-full p-2 bg-white/20" />
                <p>Guest</p>
              </button>
            </MenuItem>
            <div className="py-1">
              <div className="h-px bg-white/5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavigationMenu = () => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton className="h-14 w-14 flex justify-center items-center bg-black/60 data-[open]:bg-emerald-500 backdrop-blur-lg rounded-full focus:outline-none transition-colors">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://i.pinimg.com/564x/97/f4/24/97f4249701d4f25e609a1b3dfd5d8c1f.jpg"
              alt=""
            />
          </MenuButton>
          <AnimatePresence>
            {open && (
              <MenuItems
                anchor="bottom end"
                static
                as={motion.div}
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.2 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                className="w-52 z-50 origin-top-right rounded-xl border border-white/5 bg-black/60 backdrop-blur-xl p-1 text-sm/6 text-white [--anchor-gap:6px] focus:outline-none"
              >
                <SubMenu />
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                    <UserMinusIcon className="size-4 fill-white/30" />
                    Remove User
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                    <Cog8ToothIcon className="size-4 fill-white/30" />
                    Settings
                  </button>
                </MenuItem>
                <div className="py-1">
                  <div className="h-px bg-white/5" />
                </div>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 text-red-500 data-[focus]:bg-white/10">
                    <ArrowLeftStartOnRectangleIcon className="size-4 fill-red-500" />
                    Logout
                  </button>
                </MenuItem>
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
};

export default NavigationMenu;
