import { STOP_TIMER } from 'redux-timer-middleware'
import {
  RESET_DATA,
  GET_NEXT_NUMBER,
  RESET_PROGRESS_BAR,
  CLEAR_TIMER
} from '../constants'

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
      type: STOP_TIMER,
      payload: {
          timerName: 'gameTimerNextNumber'
      }
    })
    dispatch({
      type: STOP_TIMER,
      payload: {
          timerName: 'gameTimerSelectNumber'
      }
    })
    dispatch({
      type: STOP_TIMER,
      payload: {
          timerName: 'gameTimerIsEnd'
      }
    })
    dispatch({
      type: STOP_TIMER,
      payload: {
          timerName: 'gameTimerPlayerWinState'
      }
    })
    dispatch({
      type: STOP_TIMER,
      payload: {
          timerName: 'gameTimerSetEnd'
      }
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
