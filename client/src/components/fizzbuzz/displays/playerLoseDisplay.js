import React from 'react'
import { connect } from 'react-redux'
import { ResetGameButton } from '../buttons'
import { ScoreDisplay } from './'
import { playerWinDisplayStyle } from '../../../styles'

const PlayerLoseDisplay = (props) => props.playerLose ?
  <div style={playerWinDisplayStyle.container}>
    <div style={playerWinDisplayStyle.header}>
      You Lost!
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
  playerLose: fizzBuzz.playerLose
})

export default connect(
  mapPropsToState
)(PlayerLoseDisplay)
