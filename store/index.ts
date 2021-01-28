import {ActionType, ReducerType, StateType} from 'store'
import {Context, createContext, Dispatch} from 'react'

const initialState: StateType = {
  page: 'home',
}

const reducer: ReducerType = (state: StateType, action: ActionType) => {
  const { type, payload } = action

  switch (type) {
    case 'page':
      return {...state, page: payload.page}
  }
}

const WebContext: Context<{state: StateType, dispatch?: Dispatch<ActionType>}>
  = createContext({state: initialState})

export {
  initialState,
  reducer,
  WebContext
}
