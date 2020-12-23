import React from 'react'

export interface StateType {
  mdx?: string
}

export interface ActionType {
  type: string | 'mdx',
  payload: StateType
}

export type ReducerType = React.Reducer<StateType, ActionType>
