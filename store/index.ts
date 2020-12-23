import {ActionType, ReducerType, StateType} from 'store'
import {Context, createContext, Dispatch} from 'react'

const initialState: StateType = {
  mdx: ''
}

const reducer: ReducerType = (state: StateType, action: ActionType) => {
  const { type, payload: { mdx } } = action

  switch (type) {
    case 'mdx':
      return {...state, mdx}
  }
}

const WebContext: Context<{state: StateType, dispatch?: Dispatch<ActionType>}>
  = createContext({state: initialState})

export {
  initialState,
  reducer,
  WebContext
}
