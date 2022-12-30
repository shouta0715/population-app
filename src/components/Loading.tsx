import React, { FC } from "react";

export const Loading: FC = () => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="h-40 w-40 animate-spin rounded-full  border-4 border-sky-300 border-r-transparent" />
  </div>
);
