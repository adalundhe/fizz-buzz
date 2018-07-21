import {
  SUBMIT_MAX_RANGE
} from '../constants'

const updateMaxRange = (newMaxRange) => {
  return dispatch => {
    dispatch({
      type: SUBMIT_MAX_RANGE,
      newMaxRange
    })
  }
}

export default updateMaxRange
