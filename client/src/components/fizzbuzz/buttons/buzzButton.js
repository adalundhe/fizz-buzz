import React from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkBuzz } from '../../../actions'
import { withStyles } from '@material-ui/core/styles';
import { gameButtonStyle, buzzButtonContainerStyle } from '../../../styles'
import Button from '@material-ui/core/Button';

const BuzzButton = (props) => {

  const { classes } = props;

  return (
    <div style={buzzButtonContainerStyle}>
      <Button
        variant="fab"
        color="primary"
        className={classes.button}
        onClick={props.checkBuzz}
      >
        Buzz
      </Button>
    </div>
  )
}

BuzzButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ fizzBuzz }) => ({
  currentNumber: fizzBuzz.currentNumber
})

const mapDispatchToProps = dispatch => bindActionCreators({
  checkBuzz
}, dispatch)

const styledButton = withStyles(gameButtonStyle)(BuzzButton)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledButton)
