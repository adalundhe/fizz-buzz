import {
  SELECT_NUMBER,
  INCREMENT_SCORE_FIZZ,
  DECREMENT_SCORE_FIZZ,
  CHECK_FIZZ,
  GET_NEXT_NUMBER
} from '../constants'

const checkFizz = (currentNumber) => {
  return dispatch => {
    dispatch({
      type: SELECT_NUMBER,
      currentNumber
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
      type: GET_NEXT_NUMBER
    })

  }
}

export default checkFizz
