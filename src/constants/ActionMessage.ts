import TodoFilters from "./TodoFilters";
import { Todo } from "../models/Todo";
export type ActionMessage = {
  type: 'ADD_TODO';
  text: string;
} | {
  type: 'DELETE_TODO';
  id: number;
} | {
  type: 'EDIT_TODO';
  id: number;
  text: string;
} | {
  type: 'COMPLETE_TODO';
  id: number;
} | {
  type: 'COMPLETE_ALL_TODOS';
} | {
  type: 'CLEAR_COMPLETED';
} | {
  type: 'SET_VISIBILITY_FILTER';
  filter: TodoFilters;
} | {
  type: 'NONE';
} | {
  type: 'RESET_ERROR_MESSAGE';
} | {
  type: 'DELETE_TODO_SUCCESS';
  payload: {id: number;}
} | {
  type: 'POST_TODO_SUCCESS';
  payload: {id: number;text:string}
} | {
  type: 'PUT_TODO_SUCCESS';
  payload: {text:string}
} | {
  type: 'LOAD_TODO_SUCCESS';
  json: Todo[];
};
