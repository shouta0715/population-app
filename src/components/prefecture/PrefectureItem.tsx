import React, { FC } from "react";
import { useChangeHandler } from "../../hooks/handler/useChangeHandler";
import { Prefecture } from "../../types/prefectures";

type Props = {
  prefecture: Prefecture;
};

export const PrefectureItem: FC<Props> = ({ prefecture }) => {
  const { handlerChange } = useChangeHandler();

  return (
    <li>
      <div className="space-x-4">
        <input
          id={prefecture.prefCode.toString()}
          type="checkbox"
          onChange={(e) => handlerChange(e, prefecture.prefCode)}
        />
        <label
          className="text-sm md:text-base"
          htmlFor={prefecture.prefCode.toString()}
        >
          {prefecture.prefName}
        </label>
      </div>
    </li>
  );
};
