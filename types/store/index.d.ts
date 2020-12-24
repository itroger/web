import React from 'react'
import {PageType} from 'components/header'

export interface StateType {
  page?: PageType
}

export interface ActionType {
  type: string | 'page',
  payload: StateType
}

export type ReducerType = React.Reducer<StateType, ActionType>
