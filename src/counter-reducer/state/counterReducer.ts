import { State } from "../interfaces/interfaces";
import { Action } from "../types/typesCounter";

export const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "update counter":
      return {
        ...state,
        counter: state.counter + action.payload,
        previous: state.counter,
        changes: state.changes + 1,
      };
    case "increasedBy":
      return {
        ...state,
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };
    case "reset":
      return { counter: 0, previous: 0, changes: 0 };
    default:
      return state;
  }
};
