import { combineReducers } from 'redux'
import fizzBuzz from './fizzBuzz'
import { requestData, requestIsLoading, requestHasErrored } from './getData'

export default combineReducers({
  fizzBuzz,
  requestData,
  requestIsLoading,
  requestHasErrored
})
