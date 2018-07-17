import {
  REQUEST_FETCH_DATA_SUCCESS,
  REQUEST_IS_LOADING,
  REQUEST_HAS_ERRORED
} from '../constants'

export const requestHasErrored = (state = false, action) => {
    switch (action.type) {
        case REQUEST_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}
export const requestIsLoading = (state = false, action) => {
    switch (action.type) {
        case REQUEST_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export const requestData = (state = [], action) => {
    switch (action.type) {
        case REQUEST_FETCH_DATA_SUCCESS:
            return action.results_array;
        default:
            return state;
    }
}
