import create from "zustand";
import { PrefCodeState } from "../types/prefectures";

export const usePrefecture = create<PrefCodeState>((set, get) => ({
  prefCodeArray: [],
  add: (prefCode) => set({ prefCodeArray: [...get().prefCodeArray, prefCode] }),
  remove: (prefCode) =>
    set({
      prefCodeArray: get().prefCodeArray.filter(
        (prevNumber) => prevNumber !== prefCode
      ),
    }),
}));
