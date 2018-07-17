import {
  SELECT_NUMBER,
  INCREMENT_SCORE_BUZZ,
  DECREMENT_SCORE_BUZZ,
  CHECK_BUZZ,
  GET_NEXT_NUMBER
} from '../constants'

const checkBuzz = (currentNumber) => {
  return dispatch => {
    dispatch({
      type: SELECT_NUMBER,
      currentNumber
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
    dispatch({
      type: GET_NEXT_NUMBER
    })

  }
}

export default checkBuzz
