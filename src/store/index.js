import { createStore, compose } from 'redux'
import middlewares from './middlewares'
import appReducer from './ducks'

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default createStore(rootReducer, {}, compose(...middlewares))