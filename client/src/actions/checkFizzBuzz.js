import {
  SELECT_NUMBER,
  INCREMENT_SCORE_FIZZBUZZ,
  DECREMENT_SCORE_FIZZBUZZ,
  CHECK_FIZZBUZZ,
  CHECK_FIZZ,
  CHECK_BUZZ,
  GET_NEXT_NUMBER,
  CHECK_IS_END,
  CHECK_PLAYER_WIN_STATE,
  SET_GAME_END_STATE
} from '../constants'

const checkFizzBuzz = () => {
  return dispatch => {
    console.log("GOT")
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
      type: CHECK_PLAYER_WIN_STATE
    })
    dispatch({
      type: SET_GAME_END_STATE
    })
    dispatch({
      type: SELECT_NUMBER
    })
    dispatch({
      type: GET_NEXT_NUMBER
    })

  }
}

export default checkFizzBuzz
