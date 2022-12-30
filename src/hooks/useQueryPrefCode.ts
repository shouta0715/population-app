import { useQuery } from "@tanstack/react-query";
import { Axios } from "../libs/QueryClient";
import { PrefecturesApi } from "../types/api/api";
import { Prefecture } from "../types/prefectures";

const getPrefCode = async () => {
  const { data } = await Axios.get<PrefecturesApi>(`/api/v1/prefectures`);

  return data.result;
};

export const useQueryPrefCode = () =>
  useQuery<Prefecture[]>({
    queryKey: ["prefectures"],
    queryFn: getPrefCode,
  });
