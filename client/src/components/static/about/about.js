import React from 'react'
import { aboutStyle } from '../../../styles'
import { stopTimers } from '../../../actions'
import TooltipContainer from './tooltips/tooltipContainer'
import DisplaysContainer from './displays/displaysContainer'

const About = (props) => {

  stopTimers()

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


export default About
