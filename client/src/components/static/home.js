import React from 'react'
import { homeStyle } from '../../styles'
import { stopTimers } from '../../actions'

const Home = () => {
  stopTimers()
  return (
    <div style={homeStyle}>
      <div style={homeStyle.messageItem}>
        Welcome Home.
      </div>
    </div>
  )
}

  export default Home
