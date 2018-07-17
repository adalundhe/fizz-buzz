import {
  SELECT_NUMBER,
  INCREMENT_SCORE_FIZZBUZZ,
  DECREMENT_SCORE_FIZZBUZZ,
  INCREMENT_SCORE_FIZZ,
  DECREMENT_SCORE_FIZZ,
  INCREMENT_SCORE_BUZZ,
  DECREMENT_SCORE_BUZZ,
  CHECK_FIZZBUZZ,
  CHECK_FIZZ,
  CHECK_BUZZ,
  GET_NEXT_NUMBER,
  REQUEST_IS_LOADING,
  REQUEST_HAS_ERRORED,
  REQUEST_FETCH_DATA_SUCCESS,
  CHECK_IS_END,
  CHECK_PLAYER_WIN_STATE,
  SET_GAME_END_STATE,
  RESET_GAME,
  initialState
} from '../constants'

export default (state = initialState, action) => {
  console.log(action, state.currentNumberIndex, state.resultsArray[state.currentNumberIndex - 1])
  switch (action.type) {
    case CHECK_FIZZ:
      return {
        ...state,
        isFizz: state.resultsArray[state.currentNumberIndex - 1] === "Fizz!"
      }
    case CHECK_BUZZ:
      return {
        ...state,
        isBuzz: state.resultsArray[state.currentNumberIndex - 1] === "Buzz!"
      }
    case CHECK_FIZZBUZZ:
      return {
        ...state,
        isFizzBuzz: state.isFizz && state.isBuzz
      }
    case INCREMENT_SCORE_FIZZBUZZ:
      return {
        ...state,
        score: state.isFizzBuzz ? state.score + 15 : state.score,
      }
    case DECREMENT_SCORE_FIZZBUZZ:
      return {
        ...state,
        score: !state.isFizzBuzz ? state.score - 15 : state.score,
      }
    case INCREMENT_SCORE_FIZZ:
      return {
        ...state,
        score: state.isFizz ? state.score + 5 : state.score,
      }
    case DECREMENT_SCORE_FIZZ:
      return {
        ...state,
        score: !state.isFizz ? state.score - 5 : state.score,
      }
    case INCREMENT_SCORE_BUZZ:
      return {
        ...state,
        score: state.isBuzz ? state.score + 3 : state.score,
      }
    case DECREMENT_SCORE_BUZZ:
      return {
        ...state,
        score: !state.isBuzz ? state.score - 3 : state.score,
      }
    case SELECT_NUMBER:
    return {
      ...state,
      currentNumber: state.gameArray[state.currentNumberIndex]
    }
    case GET_NEXT_NUMBER:
      return {
        ...state,
        currentNumberIndex: state.currentNumberIndex + 1
      }
    case REQUEST_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        hasErrored: false,
        gameReady: false
      }
    case REQUEST_HAS_ERRORED:
      return {
        ...state,
        isLoading: false,
        hasErrored: true,
        gameReady: false
      }
    case REQUEST_FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasErrored: false,
        gameReady: true,
        resultsArray: action.resultsArray,
        gameArray: action.resultsArray.map((item, index) => index + 1)
      }
    case CHECK_IS_END:
      return {
        ...state,
        isEnd: state.currentNumberIndex >= state.gameArray.length
      }
    case CHECK_PLAYER_WIN_STATE:
      return {
        ...state,
        playerWin: state.isEnd && state.score > 0,
        playerLose: state.isEnd && state.score <= 0
      }
    case SET_GAME_END_STATE:
      return {
        ...state,
        gameReady: (!state.isLoading && !state.hasErrored && !state.isEnd)
      }
    case RESET_GAME:
      return {
        ...state,
        score: 0,
        currentNumber: 0,
        currentNumberIndex: 0,
        isEnd: false,
        playerWin: false,
        playerLose: false,
      }
    default:
      return state
  }
}
