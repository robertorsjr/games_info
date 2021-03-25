import { combineReducers } from 'redux'
import gamesState from './games'
import gameByIdState from './gamesById'
import platformsState from './platforms'

export default combineReducers({
  gamesState,
  gameByIdState,
  platformsState
})