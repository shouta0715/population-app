import React, { FC } from "react";
import { useQueryPrefCode } from "../../hooks/useQueryPrefCode";
import { PrefectureItem } from "./PrefectureItem";

export const Prefectures: FC = () => {
  const { data } = useQueryPrefCode();

  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(96px,_1fr))] items-center justify-center md:gap-2">
        {data?.map((prefecture) => (
          <PrefectureItem key={prefecture.prefCode} prefecture={prefecture} />
        ))}
      </ul>
    </div>
  );
};
