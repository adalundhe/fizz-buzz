import {
  GET_DATA,
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
  CHECK_CORRECT_GUESS,
  initialState
} from '../constants'

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_FIZZ:
      return {
        ...state,
        isFizz: (state.selectedNumber%5 == 0) ? true : false
      }
    case CHECK_BUZZ:
      return {
        ...state,
        isBuzz: (state.selectedNumber%3 == 0) ? true : false
      }
    case CHECK_FIZZBUZZ:
      return {
        ...state,
        isFizzBuzz: (state.isFizz && state.isBuzz) ? true : false
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
      selectedNumber: action.selectedNumber
    }

    default:
      return state
  }
}
