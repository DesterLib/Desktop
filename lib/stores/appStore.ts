import { create } from "zustand";

const useAppStore = create((set) => ({
  mainCarouselLoaded: false,
}));

export default useAppStore;