import React, { Component } from 'react'
import { FizzBuzzGame} from '../../components'
import { getData } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const FizzBuzz  = () => <FizzBuzzGame />

const mapStateToProps = ({ fizzBuzz }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FizzBuzz)
