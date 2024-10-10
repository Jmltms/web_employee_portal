import { useCallback, useState } from "react";

type ResetState<T> = (state: T) => void;

export const useResetState = <T>(
  defaultState: T
): [T, ResetState<T>, () => void] => {
  const [initialState, setInitialState] = useState(defaultState);

  const resetState = useCallback(() => {
    setInitialState(initialState);
  }, [initialState]);
  return [initialState, setInitialState, resetState];
};
