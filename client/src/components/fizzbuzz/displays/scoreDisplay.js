import React from 'react'
import { connect } from 'react-redux'

const ScoreDisplay = (props) =>
  <div>
    {
      props.score
    }
  </div>


const mapStateToProps = ({ fizzBuzz }) => ({
  score: fizzBuzz.score
})

export default connect(
  mapStateToProps
)(ScoreDisplay)
