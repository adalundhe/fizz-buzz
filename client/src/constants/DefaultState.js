const initialState = {
  maxRange: 0,
  resultsArray: [],
  gameArray: [],
  showResults: false,
  score: 0,
  isFizz: false,
  isBuzz: false,
  isFizzBuzz: false,
  isEnd: false,
  playerWin: false,
  playerLose: false,
  currentNumber: null,
  currentNumberIndex: 0,
  isLoading: false,
  hasErrored: false,
  gameReady: false,
  progressBarPercent: 0,
  activeTimer: null,
  showScoringGameInfo: false,
  showPlayGameInfo: false,
  showStartGameInfo: true,
  numberSet: false
}

export default initialState
