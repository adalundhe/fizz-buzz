import { CHANGE_ACTIVE_DISPLAY } from '../constants'

const switchActiveDisplay = (newDisplayState) => {
  return dispatch => {
    dispatch({
      type: CHANGE_ACTIVE_DISPLAY,
      newDisplayState
    })
  }
}

export default switchActiveDisplay
