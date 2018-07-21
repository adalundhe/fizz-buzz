import {
  SUBMIT_MAX_RANGE,
  SEED_URL
} from '../constants'
import {
  requestIsLoading,
  requestHasErrored
} from './'
import axios from 'axios'

const getDefaultMaxRange = () => {

  const HTTP_PROXY = process.env.HTTP_PROXY

  return dispatch => {
    dispatch(requestIsLoading(true))
    axios.get(HTTP_PROXY + SEED_URL)
              .then(response => {
                const data = response.data
                const newMaxRange = data.max_range

                dispatch({
                  type: SUBMIT_MAX_RANGE,
                  newMaxRange
                })
              })
              .catch(error => {
                return dispatch(requestHasErrored(true))
              })
  }
}

export default getDefaultMaxRange
