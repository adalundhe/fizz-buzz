import React from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { submitMaxRange } from '../../../actions'
import { withStyles } from '@material-ui/core/styles';
import { gameButtonStyle, numberButtonContainerStyle, customLinkStyle } from '../../../styles'
import Button from '@material-ui/core/Button';

const SubmitMaxRangeButton = (props) => {

  const { classes } = props;

  return (
    <div style={numberButtonContainerStyle}>
      <Link to="/fizzbuzz/play" style={customLinkStyle.innerReactLink}>
        <Button
          variant="fab"
          color="primary"
          className={classes.button}
          onClick={() => props.submitMaxRange(props.maxRange)}
        >
        Go!
        </Button>
      </Link>
    </div>
  )
}

SubmitMaxRangeButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ fizzBuzz }) => ({
  maxRange: fizzBuzz.maxRange
})

const mapDispatchToProps = dispatch => bindActionCreators({
  submitMaxRange
}, dispatch)

const styledButton = withStyles(gameButtonStyle)(SubmitMaxRangeButton)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledButton)
