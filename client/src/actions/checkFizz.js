import {
  SELECT_NUMBER,
  INCREMENT_SCORE_FIZZ,
  DECREMENT_SCORE_FIZZ,
  CHECK_FIZZ,
  GET_NEXT_NUMBER,
  CHECK_IS_END,
  CHECK_PLAYER_WIN_STATE,
  SET_GAME_END_STATE
} from '../constants'

const checkFizz = () => {
  return dispatch => {
    dispatch({
      type: CHECK_IS_END
    })
    dispatch({
      type: CHECK_PLAYER_WIN_STATE
    })
    dispatch({
      type: SET_GAME_END_STATE
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
      type: SELECT_NUMBER
    })
    dispatch({
      type: GET_NEXT_NUMBER
    })

  }
}

export default checkFizz
