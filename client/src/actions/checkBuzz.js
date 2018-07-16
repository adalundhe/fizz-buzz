import {
  SELECT_NUMBER,
  INCREMENT_SCORE_BUZZ,
  DECREMENT_SCORE_BUZZ,
  CHECK_BUZZ
}

const checkBuzz = (selectNumber) => {
  return dispatch => {
    dispatch({
      type: SELECT_NUMBER.
      selectNumber
    })
    dispatch({
      type: CHECK_BUZZ
    })
    dispatch({
      type: INCREMENT_SCORE_BUZZ
    })
    dispatch({
      type: DECREMENT_SCORE_BUZZ
    })

  }
}

export default checkBuzz
