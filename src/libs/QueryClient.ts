import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      retry: false,
      suspense: true,
    },
  },
});

export const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    "X-API-KEY": import.meta.env.VITE_API_KEY,
  },
});
