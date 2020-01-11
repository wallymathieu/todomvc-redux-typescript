import { ActionMessage } from "../constants/ActionMessage";
import * as ActionTypes from '../constants/ActionTypes';
import { AnyAction } from "redux";

// Updates error message to notify about the failed fetches.
export function errorMessage ( state = null, action: AnyAction) {
  if (!action) return state;

  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

// Creates a reducer managing isFetching, given the action types to handle,
// and a function telling how to extract the key from an action.
export function fetching(
  types: string[],
  mapActionToKey: (msg: ActionMessage) => any
) {
  return processingWithKey(types,mapActionToKey,'isFetching');
}
// Creates a reducer managing isExecuting, given the action types to handle,
// and a function telling how to extract the key from an action.
export function executing(
  types: string[],
  mapActionToKey: (msg: ActionMessage) => any
) {
  return processingWithKey(types,mapActionToKey,'isExecuting');
}

function processingWithKey(
  types: string[],
  mapActionToKey: (msg: ActionMessage) => any,
  processingKey:string
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
  if (typeof processingKey !== "string"){
    throw new Error("Expected processingKey to be string.");
  }

  const [requestType, successType, failureType] = types;

  function updateIsProcessing(
    state = {
      [processingKey]: false
    },
    action:ActionMessage) {
    switch (action.type) {
      case requestType:
        return {
          ...state,
          [processingKey]: true,
        };
      case successType:
        return {
          ...state,
          [processingKey]: false,
        };
      case failureType:
        return {
          ...state,
          [processingKey]: false,
        };
      default:
        return state;
    }
  }

  return (state = {}, action: ActionMessage) => {
    switch (action?.type) {
      case requestType:
      case successType:
      case failureType:
        const key = mapActionToKey(action);
        if (typeof key !== "string") {
          throw new Error("Expected key to be a string.");
        }
        return {
          ...state,
          [key]: updateIsProcessing((state as any)[key], action)
        };
      default:
        return state;
    }
  };
}
