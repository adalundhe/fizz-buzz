import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getData } from '../../../actions'
import { withStyles } from '@material-ui/core/styles';
import { gameButtonStyle, buzzButtonContainerStyle } from '../../../styles'
import Button from '@material-ui/core/Button';

const ResetGameButton = (props) => {

  const { classes } = props;

  return (
    <div style={buzzButtonContainerStyle}>
      <Button
        variant="fab"
        color="primary"
        className={classes.button}
        onClick={props.getData}
      >
        Reset
      </Button>
    </div>
  )
}

ResetGameButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)

const styledButton = withStyles(gameButtonStyle)(ResetGameButton)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledButton)
