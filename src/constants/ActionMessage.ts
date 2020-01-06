import TodoFilters from "./TodoFilters";
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
};
