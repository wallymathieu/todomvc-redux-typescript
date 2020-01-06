import { SET_VISIBILITY_FILTER, ActionMessage } from '../constants/ActionTypes'
import TodoFilters from '../constants/TodoFilters'

const { SHOW_ALL }=TodoFilters;

const visibilityFilter = (state = SHOW_ALL, action:ActionMessage) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter