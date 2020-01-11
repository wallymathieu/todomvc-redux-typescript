import { RootState } from "../containers";

export function loadTodos() {
  return {
    // Types of actions to emit before and after
    types: ['LOAD_TODO_REQUEST', 'LOAD_TODO_SUCCESS', 'LOAD_TODO_FAILURE'],
    // Check the cache (optional):
    shouldCallAPI: (_state:RootState) => true, //!state.loadedTodos,
    // Perform the fetching:
    callAPI: () => fetch(`api/todos/`,{
      headers: {
        'Accept': 'application/json',
      }
    }),
    // Arguments to inject in begin/end actions
    payload: { }
  }
}

export function editTodo(id:number, text:string) {
  return {
    // Types of actions to emit before and after
    types: ['PUT_TODO_REQUEST', 'PUT_TODO_SUCCESS', 'PUT_TODO_FAILURE'],
    // Check the cache (optional):
    shouldCallAPI: (_state:RootState) => true, //!state.loadedTodos,
    // Perform the fetching:
    callAPI: () => fetch(`api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text})
    }),
    // Arguments to inject in begin/end actions
    payload: { id, text }
  }
}

export function addTodo(text:string) {
  return {
    // Types of actions to emit before and after
    types: ['POST_TODO_REQUEST', 'POST_TODO_SUCCESS', 'POST_TODO_FAILURE'],
    // Check the cache (optional):
    shouldCallAPI: (_state:RootState) => true, //!state.loadedTodos,
    // Perform the fetching:
    callAPI: () => fetch(`api/todos/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text})
    }),
    // Arguments to inject in begin/end actions
    payload: { text }
  }
}

export function removeTodo(id:number) {
  return {
    // Types of actions to emit before and after
    types: ['DELETE_TODO_REQUEST', 'DELETE_TODO_SUCCESS', 'DELETE_TODO_FAILURE'],
    // Check the cache (optional):
    shouldCallAPI: (_state:RootState) => true, //!state.loadedTodos,
    // Perform the fetching:
    callAPI: () => fetch(`api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }),
    // Arguments to inject in begin/end actions
    payload: { id }
  }
}