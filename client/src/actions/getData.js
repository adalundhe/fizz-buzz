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
  return dispatch => {
    dispatch({
      type: RESET_GAME
    })
    dispatch(requestIsLoading(true))
    axios.get('http://localhost:8000' + API_URL)
              .then(response => {
                const data = response.data

                dispatch(requestFetchDataSuccess(data.results_array))
                dispatch(runTimer())
              })
              .catch(error => {
                console.log('ERR',error)
                return dispatch(requestHasErrored(true))
              })
  }
}

export default getData
