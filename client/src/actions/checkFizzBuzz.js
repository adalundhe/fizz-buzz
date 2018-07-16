import {
  SELECT_NUMBER,
  INCREMENT_SCORE_FIZZBUZZ,
  DECREMENT_SCORE_FIZZBUZZ,
  CHECK_FIZZBUZZ,
  CHECK_FIZZ,
  CHECK_BUZZ
}

const checkFizzBuzz = (selectNumber) => {
  return dispatch => {
    dispatch({
      type: SELECT_NUMBER.
      selectNumber
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

  }
}

export default checkFizzBuzz
