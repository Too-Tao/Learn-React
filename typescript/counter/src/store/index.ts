import { createStore, combineReducers } from 'redux'
import { CountReducer } from './reducers'

const rootReducer = combineReducers({
  count: CountReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(rootReducer)
  return store
}