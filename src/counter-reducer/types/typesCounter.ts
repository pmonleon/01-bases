export const actionsTypes = {
  INCREASEBY: "increasedBy",
  RESET: "reset",
  UPDATECOUNTER: "update counter",
};

export type Action =
  | { type: "increasedBy"; payload: { value: number } }
  | { type: "reset" }
  | { type: "update counter"; payload: number };
