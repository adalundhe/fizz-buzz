import {
  requestIsLoading,
  requestHasErrored,
  requestFetchDataSuccess,
  runTimer
} from './'
import axios from 'axios'
import {
  SUBMIT_MAX_RANGE,
  RESET_GAME,
  API_URL
} from '../constants'

const submitMaxRange = (newMaxRange) => {

  const HTTP_PROXY = process.env.HTTP_PROXY

  return dispatch => {
    dispatch({
      type: SUBMIT_MAX_RANGE,
      newMaxRange
    })
    dispatch({
      type: RESET_GAME
    })
    dispatch(requestIsLoading(true))
    axios.post(HTTP_PROXY + API_URL, {
      max_range: newMaxRange
    })
    .then(response => {
      const data = response.data
      dispatch(requestFetchDataSuccess(data.results_array))
      dispatch(runTimer(data.results_array))
    })
    .catch(error => {
      return dispatch(requestHasErrored(true))
    })
  }
}

export default submitMaxRange
