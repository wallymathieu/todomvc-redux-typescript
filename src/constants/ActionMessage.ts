import TodoFilters from "./TodoFilters";
import { Todo } from "../models/Todo";
import { ActionType } from 'typesafe-actions';
import * as Actions from '../actions'
export type ActionTypes=ActionType<typeof Actions>

export type ActionMessage =
  ActionTypes| {
      type: "COMPLETE_ALL_TODOS";
    }
  | {
      type: "NONE";
    }
  | {
      type: "RESET_ERROR_MESSAGE";
    }
  | {
      type:
        | "DELETE_TODO_REQUEST"
        | "DELETE_TODO_SUCCESS"
        | "DELETE_TODO_FAILURE";
    }& Pick<Todo,'id'>
  | {
      type: "POST_TODO_REQUEST" | "POST_TODO_FAILURE";
    } & Pick<Todo,'text'>
  | {
      type: "POST_TODO_SUCCESS";
      json: Todo;
    } & Pick<Todo,'text'>
  | {
      type: "PATCH_TODO_REQUEST" | "PATCH_TODO_FAILURE";
    } & Todo
  | {
      type: "PATCH_TODO_SUCCESS";
      json: Todo;
    } & Todo
  | {
      type: "LOAD_TODO_SUCCESS";
      json: Todo[];
    }
  | {
      type: "LOAD_TODO_REQUEST" | "LOAD_TODO_FAILURE";
    };
