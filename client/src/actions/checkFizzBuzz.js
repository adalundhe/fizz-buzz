import {
  SELECT_NUMBER,
  INCREMENT_SCORE_FIZZBUZZ,
  DECREMENT_SCORE_FIZZBUZZ,
  CHECK_FIZZBUZZ,
  GET_NEXT_NUMBER,
  CHECK_IS_END,
  CHECK_PLAYER_WIN_STATE,
  SET_GAME_END_STATE,
  RESET_PROGRESS_BAR,
  CLEAR_TIMER
} from '../constants'
import { runTimer } from './'

const checkFizzBuzz = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_TIMER
    })
    dispatch({
      type: RESET_PROGRESS_BAR
    })
    dispatch({
      type: CHECK_FIZZBUZZ
    })
    dispatch({
      type: INCREMENT_SCORE_FIZZBUZZ
    })
    dispatch({
      type: DECREMENT_SCORE_FIZZBUZZ
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
    dispatch(runTimer())
  }
}

export default checkFizzBuzz
