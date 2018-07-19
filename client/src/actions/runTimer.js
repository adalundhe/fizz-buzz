import {
  UPDATE_PROGRESS_BAR,
  TIMER_INTERVAL,
  ADD_TIMER
} from '../constants'
import { START_TIMER } from 'redux-timer-middleware'

const runTimer = () => {
  const maxPercentage = 99
  const timerInterval = TIMER_INTERVAL

  return dispatch => {
    let timer = 0
    timer = window.setInterval(() => {
      dispatch({
        type: START_TIMER,
        payload: {
          actionName: UPDATE_PROGRESS_BAR,
          timerName: 'runProgressBarTimer',
          timerInterval: timerInterval/maxPercentage
        }
      })
    }, TIMER_INTERVAL)
    dispatch({
      type: ADD_TIMER,
      timer
    })
  }
}

export default runTimer
