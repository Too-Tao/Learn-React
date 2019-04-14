import { ADD_COUNT, AddCountAction } from './types'

export function AddCountReducer( state = 0, action: AddCountAction ) {
  switch(action.type) {
    case ADD_COUNT:
      return state + 1
    default:
      return state
  }
}