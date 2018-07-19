import {
  UPDATE_PROGRESS_BAR,
  TIMER_INTERVAL,
  ADD_TIMER,
  GET_NEXT_NUMBER,
  SELECT_NUMBER,
  CHECK_IS_END,
  SET_GAME_END_STATE,
  CHECK_PLAYER_WIN_STATE
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
      dispatch({
        type: CHECK_IS_END
      })
      dispatch({
        type: SET_GAME_END_STATE
      })
      dispatch({
        type: CHECK_PLAYER_WIN_STATE
      })
      dispatch({
        type: GET_NEXT_NUMBER
      })
      dispatch({
        type: SELECT_NUMBER
      })
    }, TIMER_INTERVAL)
    dispatch({
      type: ADD_TIMER,
      timer
    })
  }
}

export default runTimer
