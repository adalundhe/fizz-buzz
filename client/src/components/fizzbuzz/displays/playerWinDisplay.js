import React from 'react'
import { connect } from 'react-redux'
import { ResetGameButton } from '../buttons'
import { ScoreDisplay } from './'
import { playerWinDisplayStyle } from '../../../styles'

const PlayerWinDisplay = (props) => props.playerWin ?
  <div style={playerWinDisplayStyle.container}>
    <div style={playerWinDisplayStyle.header}>
      You won!
    </div>
    <div>
      <ScoreDisplay />
    </div>
    <div style={playerWinDisplayStyle.section}>
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
