import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkFizzBuzz } from '../../../actions'

const FizzBuzzButton = (props) =>
  <div>
    <button
      onClick={props.checkFizzBuzz}
    >
      FizzBuzz!
    </button>
  </div>

const mapStateToProps = ({ fizzBuzz }) => ({
  currentNumber: fizzBuzz.currentNumber
})

const mapDispatchToProps = dispatch => bindActionCreators({
  checkFizzBuzz
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FizzBuzzButton)
