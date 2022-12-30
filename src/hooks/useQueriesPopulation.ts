import { useQueries } from "@tanstack/react-query";
import { Axios } from "../libs/QueryClient";
import { PopulationsApi } from "../types/api/api";

const getPopulation = async (prefCode: number) => {
  const { data } = await Axios.get<PopulationsApi>(
    `/api/v1/population/composition/perYear?prefCode=${prefCode}&cityCode=-`
  );

  return { prefCode, data: data.result.data[0].data };
};

export const useQueriesPopulation = (prefCodes: number[]) =>
  useQueries({
    queries: prefCodes.map((prefCode) => ({
      queryKey: ["population", prefCode],
      queryFn: () => getPopulation(prefCode),
      enabled: prefCodes.length > 0,
    })),
  });
