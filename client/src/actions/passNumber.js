import {
  SELECT_NUMBER,
  GET_NEXT_NUMBER,
  CHECK_IS_END,
  CHECK_PLAYER_WIN_STATE,
  SET_GAME_END_STATE,
  REMOVE_ACTIVE_TIMER,
  ADD_USER_CALL
} from '../constants'

const passNumber = () => {

  return dispatch => {

    dispatch({
      type: CHECK_IS_END
    })
    dispatch({
      type: SET_GAME_END_STATE
    })
    dispatch({
      type: CHECK_PLAYER_WIN_STATE
    })
    dispatch({
      type: GET_NEXT_NUMBER
    })
    dispatch({
      type: SELECT_NUMBER
    })
  }

}

export default passNumber
