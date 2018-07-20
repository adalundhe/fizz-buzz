import {
  RESET_DATA,
  GET_NEXT_NUMBER,
  RESET_PROGRESS_BAR,
  CLEAR_TIMER
} from '../constants'
import { STOP_TIMER } from 'redux-timer-middleware'

const stopTimers = () => {
  return dispatch => {
    dispatch({
      type: STOP_TIMER,
      payload: {
        timerName: 'runProgressBarTimer'
      }
    })
    dispatch({
      type: CLEAR_TIMER
    })
    dispatch({
      type: RESET_DATA
    })
    dispatch({
      type: GET_NEXT_NUMBER
    })
    dispatch({
      type: RESET_PROGRESS_BAR
    })
  }
}

export default stopTimers
