import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkBuzz } from '../../../actions'

const BuzzButton = (props) =>
  <div>
    <button
      onClick={props.checkBuzz}
    >
      Buzz!
    </button>
  </div>

const mapStateToProps = ({ fizzBuzz }) => ({
  currentNumber: fizzBuzz.currentNumber
})

const mapDispatchToProps = dispatch => bindActionCreators({
  checkBuzz
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BuzzButton)
