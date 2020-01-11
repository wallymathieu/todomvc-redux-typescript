import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
  LOAD_TODO_SUCCESS} from '../constants/ActionTypes'
import { ActionMessage } from "../constants/ActionMessage"
import { Todo } from '../models/Todo'

const initialState:Todo[] = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]
export default function todoApiResults(state = initialState, action:ActionMessage){
  switch (action?.type) {
    case LOAD_TODO_SUCCESS:
      return action.json;
    default:
      return todos(state, action)
  }
}

export function todos(state = initialState, action:ActionMessage) {
  switch (action?.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
