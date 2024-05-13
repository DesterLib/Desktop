import { create } from "zustand";

const useBackgroundStore = create((set) => ({
  colors: [],
}));

export default useBackgroundStore;
