import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { passNumber } from '../../../actions'

const PassButton = (props) =>
  <div>
    <button
      onClick={props.passNumber}
    >
      Pass
    </button>
  </div>

const mapStateToProps = ({ fizzBuzz }) => ({
  currentNumber: fizzBuzz.currentNumber
})

const mapDispatchToProps = dispatch => bindActionCreators({
  passNumber
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PassButton)
