import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { stopTimers } from '../../../actions'
import { withStyles } from '@material-ui/core/styles';
import { gameButtonStyle, buzzButtonContainerStyle, customLinkStyle } from '../../../styles'
import Button from '@material-ui/core/Button';

const ResetGameButton = (props) => {
  props.stopTimers()
  const { classes } = props;

  return (
    <div style={buzzButtonContainerStyle}>
      <Link to="/fizzbuzz" style={customLinkStyle.innerReactLink}>
        <Button
          variant="fab"
          color="primary"
          className={classes.button}
        >
          Reset
        </Button>
      </Link>
    </div>
  )
}

ResetGameButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ fizzBuzz }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  stopTimers
}, dispatch)

const styledButton = withStyles(gameButtonStyle)(ResetGameButton)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledButton)
