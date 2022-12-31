/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from "react";
import { useChangeHandler } from "../../hooks/handler/useChangeHandler";
import { Prefecture } from "../../types/prefectures";

type Props = {
  prefecture: Prefecture;
};

export const PrefectureItem: FC<Props> = ({ prefecture }) => {
  const { handlerChange } = useChangeHandler();

  return (
    <li className="mb-2 md:my-0">
      <div className="flex items-center justify-start ">
        <input
          id={prefecture.prefCode.toString()}
          type="checkbox"
          className="peer hidden"
          onChange={(e) => handlerChange(e, prefecture.prefCode)}
        />
        <label
          htmlFor={prefecture.prefCode.toString()}
          className="relative mr-2 flex h-2 w-2 items-center justify-center rounded-md border border-black p-2  before:absolute before:text-xs peer-checked:text-sky-500 peer-checked:before:content-['✓'] md:mr-4 md:h-3 md:w-3"
        />
        <label
          className="cursor-pointer text-sm peer-checked:text-sky-500 md:text-sm"
          htmlFor={prefecture.prefCode.toString()}
        >
          {prefecture.prefName}
        </label>
      </div>
    </li>
  );
};
