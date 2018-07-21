import React from 'react'
import { aboutStyle } from '../../../../styles'
import StartGameDisplay from './startGameDisplay'
import PlayGameDisplay from './playGameDisplay'
import ScoringGameDisplay from './scoringGameDisplay'

const TooltipContainer = () =>
  <div style={aboutStyle.displayContainer}>
    <StartGameDisplay />
    <PlayGameDisplay />
    <ScoringGameDisplay />
  </div>

export default TooltipContainer
