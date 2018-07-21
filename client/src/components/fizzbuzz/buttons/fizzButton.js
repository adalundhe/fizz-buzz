import React from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkFizz } from '../../../actions'
import { withStyles } from '@material-ui/core/styles';
import { gameButtonStyle } from '../../../styles'
import Button from '@material-ui/core/Button';

const FizzButton = (props) => {
  
  const { classes } = props;

  return (
    <div>
      <Button
        variant="fab"
        color="primary"
        className={classes.button}
        onClick={props.checkFizz}
      >
        Fizz
      </Button>
    </div>
  )
}

FizzButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ fizzBuzz }) => ({
  currentNumber: fizzBuzz.currentNumber
})

const mapDispatchToProps = dispatch => bindActionCreators({
  checkFizz
}, dispatch)

const styledButton = withStyles(gameButtonStyle)(FizzButton)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledButton)
