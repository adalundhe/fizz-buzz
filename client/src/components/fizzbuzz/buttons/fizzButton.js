import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkFizz } from '../../../actions'

const FizzButton = (props) =>
  <div>
    <button
      onClick={props.checkFizz}
    >
      Fizz!
    </button>
  </div>

const mapStateToProps = ({ fizzBuzz }) => ({
  currentNumber: fizzBuzz.currentNumber
})

const mapDispatchToProps = dispatch => bindActionCreators({
  checkFizz
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FizzButton)
