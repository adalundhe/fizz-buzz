import axios from 'axios'
import { requestIsLoading, requestHasErrored, requestFetchDataSuccess } from './'
import { GET_NEXT_NUMBER, SELECT_NUMBER, RESET_GAME, API_URL } from '../constants'

const getData = () => {
  return dispatch => {
    dispatch({
      type: RESET_GAME
    })
    dispatch(requestIsLoading(true))
    fetch('http://localhost:8000' + API_URL)
              .then(response => response)
              .then(response => response.json())
              .then(result => {
                  dispatch(requestFetchDataSuccess(result.results_array))
                  dispatch({
                    type: SELECT_NUMBER
                  })
                  dispatch({
                    type: GET_NEXT_NUMBER
                  })
              })
              .catch(error => dispatch(requestHasErrored(true)))
  }
}

export default getData
