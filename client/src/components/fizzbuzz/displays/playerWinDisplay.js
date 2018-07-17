import React from 'react'
import { connect } from 'react-redux'
import { ResetGameButton } from '../buttons'
import { ScoreDisplay } from './'

const PlayerWinDisplay = (props) => props.playerWin ?
  <div>
    <div>
      You won!
    </div>
    <div>
      <ScoreDisplay />
    </div>
    <div>
      <ResetGameButton />
    </div>
  </div>
  :
  null

const mapPropsToState = ({ fizzBuzz }) => ({
  playerWin: fizzBuzz.playerWin
})

export default connect(
  mapPropsToState
)(PlayerWinDisplay)
