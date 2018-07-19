import axios from 'axios'
import {
  requestIsLoading,
  requestHasErrored,
  requestFetchDataSuccess,
  runTimer
} from './'
import {
  GET_NEXT_NUMBER,
  SELECT_NUMBER,
  RESET_GAME,
  API_URL,
  CHECK_IS_END,
  SET_GAME_END_STATE,
  CHECK_PLAYER_WIN_STATE,
  TIMER_INTERVAL
} from '../constants'
import { START_TIMER } from 'redux-timer-middleware'

const getData = () => {
  return dispatch => {
    dispatch({
      type: RESET_GAME
    })
    dispatch(requestIsLoading(true))
    axios.get('http://localhost:8000' + API_URL)
              .then(response => {
                const data = response.data

                const timerInterval = TIMER_INTERVAL
                const numberOfItems = data.results_array.length + 1

                dispatch(requestFetchDataSuccess(data.results_array))
                dispatch({
                  type: START_TIMER,
                  payload: {
                      actionName: CHECK_IS_END,
                      timerName: 'gameTimerIsEnd',
                      timerInterval: timerInterval,
                      timerPeriod: numberOfItems
                  }
                })
                dispatch({
                  type: START_TIMER,
                  payload: {
                      actionName: SET_GAME_END_STATE,
                      timerName: 'gameTimerSetEnd',
                      timerInterval: timerInterval,
                      timerPeriod: numberOfItems
                  }
                })
                dispatch({
                  type: START_TIMER,
                  payload: {
                      actionName: CHECK_PLAYER_WIN_STATE,
                      timerName: 'gameTimerPlayerWinState',
                      timerInterval: timerInterval,
                      timerPeriod: numberOfItems
                  }
                })
                dispatch({
                  type: START_TIMER,
                  payload: {
                      actionName: GET_NEXT_NUMBER,
                      timerName: 'gameTimerNextNumber',
                      timerInterval: timerInterval,
                      timerPeriod: numberOfItems
                  }
                })
                dispatch({
                  type: START_TIMER,
                  payload: {
                      actionName: SELECT_NUMBER,
                      timerName: 'gameTimerSelectNumber',
                      timerInterval: timerInterval,
                      timerPeriod: numberOfItems
                  }
                })

                dispatch(runTimer(data.results_array))
              })
              .catch(error => {
                console.log('ERR',error)
                return dispatch(requestHasErrored(true))
              })
  }
}

export default getData
