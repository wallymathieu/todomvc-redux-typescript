import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../models/Todo'
import { ActionTypes } from '../actions/types'

const TodoList: React.FunctionComponent<TodoListProps> = ({ filteredTodos, actions }:TodoListProps) => {
  const loadTodos=actions.loadTodos;
  React.useEffect(()=>{loadTodos()},[loadTodos]);
  return (  <ul className="todo-list">
    {filteredTodos.map(todo =>
      <TodoItem key={todo.id} todo={todo} {...actions} />
    )}
  </ul>
);
}

export interface TodoListProps{
  filteredTodos:Todo[],
  actions:ActionTypes
}

export default TodoList
