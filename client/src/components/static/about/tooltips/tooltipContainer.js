import React from 'react'
import { aboutStyle } from '../../../../styles'
import StartGameTooltip from './startGameTooltip'
import PlayGameTooltip from './playGameTooltip'
import ScoringGameTooltip from './scoringGameTooltip'

const TooltipContainer = () =>
  <div style={aboutStyle.aboutTooltipContainer}>
    <StartGameTooltip />
    <PlayGameTooltip />
    <ScoringGameTooltip />
  </div>

export default TooltipContainer
