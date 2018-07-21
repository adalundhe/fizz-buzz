import {
  SELECT_NUMBER,
  INCREMENT_SCORE_FIZZ,
  DECREMENT_SCORE_FIZZ,
  CHECK_FIZZ,
  GET_NEXT_NUMBER,
  CHECK_IS_END,
  CHECK_PLAYER_WIN_STATE,
  SET_GAME_END_STATE,
  RESET_PROGRESS_BAR,
  CLEAR_TIMER
} from '../constants'
import { runTimer } from './'

const checkFizz = () => {
  return dispatch => {
    dispatch({
      type: CLEAR_TIMER
    })
    dispatch({
      type: RESET_PROGRESS_BAR
    })
    dispatch({
      type: CHECK_FIZZ
    })
    dispatch({
      type: INCREMENT_SCORE_FIZZ
    })
    dispatch({
      type: DECREMENT_SCORE_FIZZ
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

export default checkFizz
