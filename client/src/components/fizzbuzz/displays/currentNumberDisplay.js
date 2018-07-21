import React from 'react'
import { connect } from 'react-redux'
import { currentNumberDisplayStyle } from '../../../styles'

const CurrentNumberDisplay = (props) =>
  <div
    style={currentNumberDisplayStyle.container}>
    <div
      style={currentNumberDisplayStyle.number}>
      <div
        style={currentNumberDisplayStyle.title}>
        Current Number
      </div>
      {
        props.currentNumber
      }
      </div>
  </div>

const mapStateToProps = ({ fizzBuzz }) => ({
  currentNumber: fizzBuzz.currentNumber
})

export default connect(
  mapStateToProps
)(CurrentNumberDisplay)
