import React from 'react'
import { connect } from 'react-redux'
import { FizzBuzzButton, FizzButton, BuzzButton, PassButton } from '../buttons'
import { CurrentNumberDisplay, ScoreDisplay, TimerDisplay } from '../displays'
import { buttonContainerStyle, displayContainerStyle, gamePanelStyle } from '../../../styles'

const GamePanel = (props) => props.gameReady ?
  <div style={gamePanelStyle}>
     <div>
      <TimerDisplay />
     </div>
     <div style={displayContainerStyle}>
      <CurrentNumberDisplay />
      <ScoreDisplay />
    </div>
    <div style={buttonContainerStyle}>
      <FizzButton />
      <BuzzButton />
      <FizzBuzzButton />
      <PassButton />
    </div>
  </div>
  :
  null

const mapStateToProps = ({ fizzBuzz }) => ({
  gameReady: fizzBuzz.gameReady
})

export default connect(
  mapStateToProps
)(GamePanel)
