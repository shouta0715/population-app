import { usePrefecture } from "../../store/store";

export const useChangeHandler = () => {
  const { add, remove } = usePrefecture((state) => state);

  const handlerChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prefCode: number
  ) => {
    const { checked } = event.target;

    if (checked) {
      add(prefCode);
    } else {
      remove(prefCode);
    }
  };

  return { handlerChange };
};
