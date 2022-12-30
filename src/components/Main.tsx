import React, { Suspense } from "react";
import { Header } from "./Layout/Header";
import { Prefectures } from "./prefecture/Prefectures";

export const Main = () => (
  <div>
    <div className="container mx-auto p-6">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Prefectures />
      </Suspense>
    </div>
  </div>
);
