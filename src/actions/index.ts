import * as types from '../constants/ActionTypes'
import TodoFilters from '../constants/TodoFilters'

export const addTodo = (text:string):types.ActionMessage => ({ type: types.ADD_TODO, text })
export const deleteTodo = (id:number):types.ActionMessage => ({ type: types.DELETE_TODO, id })
export const editTodo = (id:number, text:string):types.ActionMessage => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = (id:number):types.ActionMessage => ({ type: types.COMPLETE_TODO, id })
export const completeAllTodos = ():types.ActionMessage => ({ type: types.COMPLETE_ALL_TODOS })
export const clearCompleted = ():types.ActionMessage => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = (filter:TodoFilters):types.ActionMessage => ({ type: types.SET_VISIBILITY_FILTER, filter})
