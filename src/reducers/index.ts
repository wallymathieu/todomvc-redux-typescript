import { combineReducers, compose } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {errorMessage, fetching, executing} from './apis'

const processing = compose(
  fetching(['LOAD_TODO_REQUEST', 'LOAD_TODO_SUCCESS', 'LOAD_TODO_FAILURE'],(_msg)=>'todos'),
  executing(['PUT_TODO_REQUEST', 'PUT_TODO_SUCCESS', 'PUT_TODO_FAILURE'],msg=>(msg as any).id),
  executing(['POST_TODO_REQUEST', 'POST_TODO_SUCCESS', 'POST_TODO_FAILURE'],(_msg)=>'add'),
  executing(['DELETE_TODO_REQUEST', 'DELETE_TODO_SUCCESS', 'DELETE_TODO_FAILURE'],msg=>(msg as any).id))

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  errorMessage,
  processing,
})

export default rootReducer
