import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateMaxRange } from '../../../actions';
import { numberSelectorStyle, numberSelectorContainerStyle } from '../../../styles'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Cake from '@material-ui/icons/Cake';

const NumberSelectInput = (props) => {
  const { classes } = props;

  return (
    <div style={numberSelectorContainerStyle}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Select number range:</InputLabel>
        <Input
          focused="true"
          id="input-with-icon-adornment"
          type="number"
          onChange={(event) => props.updateMaxRange(parseInput(event.target.value))}
          value={props.maxRange}
          startAdornment={
            <InputAdornment position="start">
              <Cake />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  )
}

NumberSelectInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

const parseInput = input => isNaN(parseInt(input, 10)) || parseInt(input, 10) < 1 ? 1 : parseInt(input, 10)

const mapStateToProps = ({ fizzBuzz }) => ({
  maxRange: fizzBuzz.maxRange
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateMaxRange
}, dispatch)


const styledInput =  withStyles(numberSelectorStyle)(NumberSelectInput);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledInput)
