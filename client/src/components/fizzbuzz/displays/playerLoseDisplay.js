import React from 'react'
import { connect } from 'react-redux'
import { ResetGameButton } from '../buttons'
import { ScoreDisplay } from './'

const PlayerLoseDisplay = (props) => props.playerLose ?
  <div>
    <div>
      You Lost!
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
  playerLose: fizzBuzz.playerLose
})

export default connect(
  mapPropsToState
)(PlayerLoseDisplay)
