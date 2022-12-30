import { Population, Prefecture } from "../prefectures";

export type PrefecturesApi = {
  message?: string;
  result: Prefecture[];
};

export type PopulationsApi = {
  message?: string;
  result: {
    boundaryYear: number;
    data: [
      {
        label: string;
        data: Population[];
      }
    ];
  };
};
