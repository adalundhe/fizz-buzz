import React from 'react'
import { Line, Circle } from 'rc-progress'

const TimerDisplay = (props) =>
  <div>
    <Line percent={10} strokeWidth='1' strokeColor="#81D4FA" trailColor="#B3E5FC" />
  </div>

export default TimerDisplay
