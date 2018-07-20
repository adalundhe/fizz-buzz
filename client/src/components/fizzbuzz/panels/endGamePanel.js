import React from 'react'
import { connect } from 'react-redux'
import { PlayerWinDisplay, PlayerLoseDisplay } from '../displays'

const EndGamePanel = (props) => props.isEnd ?
  <div>
    <PlayerWinDisplay />
    <PlayerLoseDisplay />
  </div>
  :
  null

const mapPropsToState = ({ fizzBuzz }) => ({
  isEnd: fizzBuzz.isEnd
})

export default connect(
  mapPropsToState
)(EndGamePanel)
