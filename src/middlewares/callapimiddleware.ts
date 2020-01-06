import { Dispatch } from 'react'
import { ActionMessage } from "../constants/ActionMessage"
import { RootState } from '../containers'
import { AnyAction } from 'redux'

export function callAPIMiddleware({ dispatch, getState }:{dispatch:Dispatch<ActionMessage>, getState:()=>RootState}) {
  return (next:(Dispatch<AnyAction>)) => (action:AnyAction) => {
    const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action
    if (!types) {
      // Normal action: pass it on
      return next(action)
    }
    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.')
    }
    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.')
    }
    if (!shouldCallAPI(getState())) {
      return
    }
    const [requestType, successType, failureType] = types
    dispatch(
      Object.assign({}, payload, {
        type: requestType
      })
    )
    return callAPI().then(
      (response:any) =>
        dispatch(
          Object.assign({}, payload, {
            response,
            type: successType
          })
        ),
      (error:any) =>
        dispatch(
          Object.assign({}, payload, {
            error,
            type: failureType
          })
        )
    )
  }
}
