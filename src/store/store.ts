import create from "zustand";

type PrefCodeState = {
  prefCodeArray: number[];
  add: (prefCode: number) => void;
  remove: (prefCode: number) => void;
};

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
