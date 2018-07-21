import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { aboutStyle } from '../../../styles'
import { stopTimers, switchActiveDisplay } from '../../../actions'
import TooltipContainer from './tooltips/tooltipContainer'
import DisplaysContainer from './displays/displaysContainer'

const About = (props) => {
  props.switchActiveDisplay({
    showPlayGameInfo: false,
    showStartGameInfo: true,
    showScoringGameInfo: false
  })
  props.stopTimers()

  return (
    <div style={aboutStyle}>
      <div style={aboutStyle.aboutHeader}>
        <em style={aboutStyle.aboutMessage}>
          Fizz Buzz Game Rules
        </em>
      </div>
      <TooltipContainer />
      <DisplaysContainer />
    </div>
  )
}

const mapStateToProps = ({ fizzBuzz }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  stopTimers,
  switchActiveDisplay
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
