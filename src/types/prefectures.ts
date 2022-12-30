export type Prefecture = {
  prefCode: number;
  prefName: number;
};

export type Population = {
  year: number;
  value: number;
};

export type PrefCodeState = {
  prefCodeArray: number[];
  add: (prefCode: number) => void;
  remove: (prefCode: number) => void;
};
