import {
  SELECT_NUMBER,
  GET_NEXT_NUMBER
} from '../constants'

const passNumber = (currentNumber) => {
  console.log("GOT:")
  return dispatch => {
    dispatch({
      type: SELECT_NUMBER
    })
    dispatch({
      type: GET_NEXT_NUMBER
    })

  }
}

export default passNumber
