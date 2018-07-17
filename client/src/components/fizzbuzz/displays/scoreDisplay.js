import React from 'react'
import { connect } from 'react-redux'
import { scoreDisplayStyle } from '../../../styles'

const ScoreDisplay = (props) =>
  <div
    style={scoreDisplayStyle.container}>
    <div
    style={scoreDisplayStyle.score}>
      <div
        style={scoreDisplayStyle.title}>
        Score
      </div>
      {
        props.score
      }
    </div>
  </div>


const mapStateToProps = ({ fizzBuzz }) => ({
  score: fizzBuzz.score
})

export default connect(
  mapStateToProps
)(ScoreDisplay)
