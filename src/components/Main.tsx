import React, { FC, Suspense } from "react";
import { MainChart } from "./Chart/MainChart";
import { Header } from "./Layout/Header";
import { Prefectures } from "./prefecture/Prefectures";

export const Main: FC = () => (
  <div>
    <div className="container mx-auto p-6">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Prefectures />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MainChart />
      </Suspense>
    </div>
  </div>
);
