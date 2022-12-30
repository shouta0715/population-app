import { useQuery } from "@tanstack/react-query";
import { Axios } from "../libs/QueryClient";
import { PrefecturesApi } from "../types/api/api";
import { Prefecture } from "../types/prefectures";

const getPrefCode = async () => {
  const { data } = await Axios.get<PrefecturesApi>(`/api/v1/prefectures`, {
    headers: {
      "X-API-KEY": `${import.meta.env.VITE_API_KEY}`,
    },
  });

  return data.result;
};

export const useQueryPrefCode = () =>
  useQuery<Prefecture[]>({
    queryKey: ["prefectures"],
    queryFn: getPrefCode,
  });
