import {
  SELECT_NUMBER,
  INCREMENT_SCORE_FIZZBUZZ,
  DECREMENT_SCORE_FIZZBUZZ,
  CHECK_FIZZBUZZ,
  CHECK_FIZZ,
  CHECK_BUZZ,
  GET_NEXT_NUMBER
} from '../constants'

const checkFizzBuzz = (currentNumber) => {
  return dispatch => {
    dispatch({
      type: SELECT_NUMBER,
      currentNumber
    })
    dispatch({
      type: CHECK_FIZZ
    })
    dispatch({
      type: CHECK_BUZZ
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
      type: GET_NEXT_NUMBER
    })

  }
}

export default checkFizzBuzz
