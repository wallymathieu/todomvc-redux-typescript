import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../Todo'
import * as TodoActions from '../actions'


const TodoList: React.FunctionComponent<TodoListProps> = ({ filteredTodos, actions }:TodoListProps) => (
  <ul className="todo-list">
    {filteredTodos.map(todo =>
      <TodoItem key={todo.id} todo={todo} {...actions} />
    )}
  </ul>
)

export interface TodoListProps{
  filteredTodos:Todo[],
  actions:typeof TodoActions
}

export default TodoList
