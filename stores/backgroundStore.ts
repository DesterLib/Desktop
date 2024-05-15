import { create } from "zustand";

interface ColorsProps {
  hex: string;
}

export interface BackgroundStoreProps {
  colors: ColorsProps[];
}

const useBackgroundStore = create<BackgroundStoreProps>()(() => ({
  colors: [],
}));

export default useBackgroundStore;
