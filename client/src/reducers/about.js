import {
  CHANGE_ACTIVE_DISPLAY,
  initialState
} from '../constants'

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_DISPLAY:
      return {
        ...state,
        ...action.newDisplayState
      }
    default:
      return state
  }
}
