import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { Main } from "./components/Main";
import { queryClient } from "./libs/QueryClient";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Main />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
