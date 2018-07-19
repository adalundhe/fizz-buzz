import React from 'react'
import { connect } from 'react-redux'
import { Line } from 'rc-progress'

const TimerDisplay = (props) => {
  return (
    <div>
      <Line
        percent={props.progressBarPercent}
        strokeWidth='1'
        strokeColor="#81D4FA"
        trailColor="#B3E5FC"
      />
    </div>
  )
}


const mapStateToProps = ({ fizzBuzz }) => ({
  progressBarPercent: fizzBuzz.progressBarPercent,
  gameArray: fizzBuzz.gameArray
})

export default connect(
  mapStateToProps
)(TimerDisplay)
