import React from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { passNumber } from '../../../actions'
import { withStyles } from '@material-ui/core/styles';
import { gameButtonStyle } from '../../../styles'
import Button from '@material-ui/core/Button';

const PassButton = (props) => {
  const { classes } = props;

  return (
    <div>
      <Button
        variant="fab"
        color="primary"
        className={classes.button}
        onClick={() => props.passNumber(props.activeTimers, props.userCalls, props.maxCalls)}
      >
        Pass
      </Button>
    </div>
  )
}

PassButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ fizzBuzz }) => ({
  currentNumber: fizzBuzz.currentNumber,
  activeTimers: fizzBuzz.activeTimers,
  userCalls: fizzBuzz.userCalls,
  maxCalls: fizzBuzz.maxCalls
})

const mapDispatchToProps = dispatch => bindActionCreators({
  passNumber
}, dispatch)

const styledButton = withStyles(gameButtonStyle)(PassButton)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledButton)
