import { STOP_TIMER } from 'redux-timer-middleware'
import { RESET_GAME, RESET_DATA, GET_NEXT_NUMBER } from '../constants'

const stopTimers = () => {
  return dispatch => {
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
  }
}

export default stopTimers
