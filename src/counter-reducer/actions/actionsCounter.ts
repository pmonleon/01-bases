import { Action } from "../types/typesCounter";

export const increaseBy = (
  value: number,
  dispatch: React.Dispatch<Action>
): void => {
  dispatch({
    type: "increasedBy",
    payload: { value },
  });
};
export const reset = (dispatch: React.Dispatch<Action>): void => {
  dispatch({ type: "reset" });
};
