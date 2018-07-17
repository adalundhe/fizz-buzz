import React from 'react'
import { connect } from 'react-redux'

const LoadingPanel = (props) => props.isLoading ?
  <div>
    Loading game...
  </div>
  :
  null

const mapStateToProps = ({ fizzBuzz }) => ({
  isLoading: fizzBuzz.isLoading
})

export default connect(
  mapStateToProps
)(LoadingPanel)
