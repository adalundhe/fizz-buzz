import React from 'react'
import { LoadingPanel, ErrorPanel, GamePanel, EndGamePanel } from './panels'

const FizzBuzzGame = (props) =>
    <div>
      <EndGamePanel />
      <LoadingPanel />
      <ErrorPanel />
      <GamePanel />
    </div>

export default FizzBuzzGame
