import {
  REQUEST_FETCH_DATA_SUCCESS,
  REQUEST_IS_LOADING,
  REQUEST_HAS_ERRORED,
  API_URL
} from '../constants'

export const requestHasErrored = (bool) => {
    return {
        type: REQUEST_HAS_ERRORED,
        hasErrored: bool
    };
}
export const requestIsLoading = (bool) => {
    return {
        type: REQUEST_IS_LOADING,
        isLoading: bool
    };
}
export const requestFetchDataSuccess = (resultsArray) => {
    return {
        type: REQUEST_FETCH_DATA_SUCCESS,
        resultsArray
    };
}


export const fetchData = () => {
    return (dispatch) => {
        dispatch(requestIsLoading(true));
        fetch('http://localhost:8000'+API_URL)
            .then((response) => {
                console.log(response)
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(requestIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((resultsArray) => dispatch(requestFetchDataSuccess(resultsArray)))
            .catch(() => dispatch(requestHasErrored(true)));
    };
}
