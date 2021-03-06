import { createStore, combineReducers } from 'redux'
import { AddCountReducer } from './reducers'

const rootReducer = combineReducers({
  count: AddCountReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(rootReducer)
  return store
}