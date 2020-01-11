import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../models/Todo'
import * as TodoActions from '../actions'


const TodoList: React.FunctionComponent<TodoListProps> = ({ loadTodos,filteredTodos, actions }:TodoListProps) => {
  React.useEffect(loadTodos,[loadTodos]);
  return (  <ul className="todo-list">
    {filteredTodos.map(todo =>
      <TodoItem key={todo.id} todo={todo} {...actions} />
    )}
  </ul>
);
}

export interface TodoListProps{
  filteredTodos:Todo[],
  actions:typeof TodoActions,
  loadTodos():void
}

export default TodoList
