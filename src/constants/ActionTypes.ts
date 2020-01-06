import TodoFilters from "./TodoFilters"

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export type ActionMessage =
  | { type: 'ADD_TODO'; text:string }
  | { type: 'DELETE_TODO'; id:number }
  | { type: 'EDIT_TODO'; id:number, text:string}
  | { type: 'COMPLETE_TODO'; id:number }
  | { type: 'COMPLETE_ALL_TODOS'; }
  | { type: 'CLEAR_COMPLETED'; }
  | { type: 'SET_VISIBILITY_FILTER'; filter: TodoFilters }
  | { type: 'NONE' }
  ;