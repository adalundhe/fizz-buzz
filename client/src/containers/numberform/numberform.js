import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NumberForm } from '../../components'
import { getDefaultMaxRange } from '../../actions'

class NumberFormContainer extends Component {
  componentDidMount = () => this.props.getDefaultMaxRange()
  render(){
    return(
      <NumberForm />
    )
  }
}

const mapStateToProps = ({ fizzBuzz }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  getDefaultMaxRange
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberFormContainer)
