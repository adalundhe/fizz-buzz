import React from 'react'
import SubmitMaxRangeButton from './submitMaxRangeButton'
import SkipSubmitButton from './skipSubmitButton'
import { buttonSectionContainerStyle } from '../../../styles'

const ButtonContainer = () =>
  <div style={buttonSectionContainerStyle}>
    <SubmitMaxRangeButton />
    <SkipSubmitButton />
  </div>

export default ButtonContainer
