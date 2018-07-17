import React from 'react'
import { connect } from 'react-redux'

const CurrentNumberDisplay = (props) =>
  <div>
  {
    props.currentNumber
  }
  </div>

const mapStateToProps = ({ fizzBuzz }) => ({
  currentNumber: fizzBuzz.currentNumber
})

export default connect(
  mapStateToProps
)(CurrentNumberDisplay)
