import React from 'react'
import { homeStyle } from '../../../styles'
import { stopTimers } from '../../../actions'
import HomeDisplay from './displays/homeDisplay'

const Home = () => {
  stopTimers()
  return (
    <div style={homeStyle}>
      <HomeDisplay />
    </div>
  )
}

  export default Home
