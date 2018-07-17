import React from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkFizzBuzz } from '../../../actions'
import { withStyles } from '@material-ui/core/styles';
import { gameButtonStyle, buzzButtonContainerStyle } from '../../../styles'
import Button from '@material-ui/core/Button';

const FizzBuzzButton = (props) => {

  const { classes } = props;

  return (
    <div style={buzzButtonContainerStyle}>
      <Button
        variant="fab"
        color="primary"
        className={classes.button}
        onClick={props.checkFizzBuzz}
      >
        FizzBuzz
      </Button>
    </div>
  )
}

FizzBuzzButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ fizzBuzz }) => ({
  currentNumber: fizzBuzz.currentNumber
})

const mapDispatchToProps = dispatch => bindActionCreators({
  checkFizzBuzz
}, dispatch)

const styledButton = withStyles(gameButtonStyle)(FizzBuzzButton)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledButton)
