import React from 'react'
import { connect } from 'react-redux'

const ErrorPanel = (props) => props.hasErrored ?
  <div>
    An error has occured. Please try refreshing the page.
  </div>
  :
  null

const mapStateToProps = ({ fizzBuzz }) => ({
  hasErrored: fizzBuzz.hasErrored
})

export default connect(
  mapStateToProps
)(ErrorPanel)
