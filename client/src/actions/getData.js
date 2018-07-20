import axios from 'axios'
import {
  requestIsLoading,
  requestHasErrored,
  requestFetchDataSuccess,
  runTimer
} from './'
import {
  RESET_GAME,
  API_URL
} from '../constants'

const getData = () => {

  const HTTP_PROXY = process.env.HTTP_PROXY

  return dispatch => {
    dispatch({
      type: RESET_GAME
    })
    dispatch(requestIsLoading(true))
    axios.get(HTTP_PROXY + API_URL)
              .then(response => {
                const data = response.data

                dispatch(requestFetchDataSuccess(data.results_array))
                dispatch(runTimer())
              })
              .catch(error => {
                return dispatch(requestHasErrored(true))
              })
  }
}

export default getData
