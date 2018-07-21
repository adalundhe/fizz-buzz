import {
  REQUEST_HAS_ERRORED,
  REQUEST_IS_LOADING,
  REQUEST_FETCH_DATA_SUCCESS
} from '../constants'


export const requestHasErrored = (bool) => {
    return {
          type: REQUEST_HAS_ERRORED,
          hasErrored: bool
      }
  }
export const requestIsLoading = (bool) => {
    return {
        type: REQUEST_IS_LOADING,
        isLoading: bool
      }
}
export const requestFetchDataSuccess = (resultsArray) => {
    return {
        type: REQUEST_FETCH_DATA_SUCCESS,
        resultsArray: resultsArray
      }
}
