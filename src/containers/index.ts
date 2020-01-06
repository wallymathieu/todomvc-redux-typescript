import TodoFilters from "../constants/TodoFilters";
import { Todo } from "../Todo";

export interface RootState{
  todos: Todo[];
  visibilityFilter: TodoFilters;
}
