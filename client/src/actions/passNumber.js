import {
  SELECT_NUMBER,
  GET_NEXT_NUMBER,
  CHECK_IS_END,
  CHECK_PLAYER_WIN_STATE,
  SET_GAME_END_STATE
} from '../constants'

const passNumber = (currentNumber) => {
  console.log("GOT:")
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
      type: SELECT_NUMBER
    })
    dispatch({
      type: GET_NEXT_NUMBER
    })

  }
}

export default passNumber
