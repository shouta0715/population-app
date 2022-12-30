import { queryClient } from "../libs/QueryClient";
import { Prefecture } from "../types/prefectures";

export const useGetPrefName = () => {
  const getPrefName = (prefCode: number) => {
    const prefectures = queryClient.getQueryData<Prefecture[]>(["prefectures"]);

    const prefecture = prefectures?.find((pref) => prefCode === pref.prefCode);

    return prefecture?.prefName.toString();
  };

  return { getPrefName };
};
