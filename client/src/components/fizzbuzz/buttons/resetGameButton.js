import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getData } from '../../../actions'

const ResetGameButton = (props) =>
  <div>
    <button onClick={props.getData}>Reset Game</button>
  </div>

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetGameButton)
