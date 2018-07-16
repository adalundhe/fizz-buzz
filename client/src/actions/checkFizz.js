import {
  SELECT_NUMBER,
  INCREMENT_SCORE_FIZZ,
  DECREMENT_SCORE_FIZZ,
  CHECK_FIZZ
}

const checkFizz = (selectNumber) => {
  return dispatch => {
    dispatch({
      type: SELECT_NUMBER.
      selectNumber
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

  }
}

export default checkFizz
