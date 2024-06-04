import { create } from "zustand";

type AppStore = {
  mainCarouselLoaded: boolean;
  nav: any[];
};

const useAppStore = create<AppStore>()((set) => ({
  mainCarouselLoaded: false,
  nav: [
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
  ],
  genres: [
    {
      title: "",
      gradiant: "",
    },
  ],
}));

export default useAppStore;
