import React, { FC, Suspense } from "react";
import { MainChart } from "./Chart/MainChart";
import { Header } from "./Layout/Header";
import { Loading } from "./Loading";
import { Prefectures } from "./prefecture/Prefectures";

export const Main: FC = () => (
  <div>
    <div className="container mx-auto p-6">
      <Header />
      <Suspense fallback={<Loading />}>
        <Prefectures />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <MainChart />
      </Suspense>
    </div>
  </div>
);
