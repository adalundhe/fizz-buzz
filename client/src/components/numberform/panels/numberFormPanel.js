import React from 'react'
import { connect } from 'react-redux'
import { numberFormPanelStyle } from '../../../styles'
import ButtonsContainer from '../buttons/buttonsContainer'
import NumberSelectInput from '../inputs/numberSelectInput'

const NumberFormPanel = (props) => props.numberSet ?
  <div style={numberFormPanelStyle}>
    <NumberSelectInput />
    <ButtonsContainer />
  </div>
  : null

  const mapStateToProps = ({ fizzBuzz }) => ({
    numberSet: fizzBuzz.numberSet
  })

  export default connect(
    mapStateToProps
  )(NumberFormPanel)
