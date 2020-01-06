import { ActionMessage } from "../constants/ActionMessage";

// Creates a reducer managing isFetching, given the action types to handle,
// and a function telling how to extract the key from an action.
export function fetching(
  types: string[],
  mapActionToKey: (msg: ActionMessage) => any
) {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error("Expected types to be an array of three elements.");
  }
  if (!types.every(t => typeof t === "string")) {
    throw new Error("Expected types to be strings.");
  }
  if (typeof mapActionToKey !== "function") {
    throw new Error("Expected mapActionToKey to be a function.");
  }

  const [requestType, successType, failureType] = types;

  function updateIsFetching({
    state = {
      isFetching: false
    },
    action
  }: {
    state: { isFetching: boolean };
    action: ActionMessage;
  }) {
    switch (action.type) {
      case requestType:
        return {
          ...state,
          isFetching: true,
        };
      case successType:
        return {
          ...state,
          isFetching: false,
        };
      case failureType:
        return {
          ...state,
          isFetching: false,
        };
      default:
        return state;
    }
  }

  return (state = {}, action: ActionMessage) => {
    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        const key = mapActionToKey(action);
        if (typeof key !== "string") {
          throw new Error("Expected key to be a string.");
        }
        return {
          ...state,
          [key]: updateIsFetching({ state: (state as any)[key], action })
        };
      default:
        return state;
    }
  };
}
