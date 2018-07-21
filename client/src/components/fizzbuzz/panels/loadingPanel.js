import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loadingDisplayStyle, loadingProgressBarStyle } from '../../../styles'

const LoadingPanel = (props) => {
  const { classes } = props;

  if (props.isLoading) {
    return (
      <div style={loadingDisplayStyle.container}>
        <CircularProgress className={classes.progress} size={100} />
      </div>
    )
  }
  else {
    return null
  }
}

LoadingPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ fizzBuzz }) => ({
  isLoading: fizzBuzz.isLoading
})

const styledComponent = withStyles(loadingProgressBarStyle)(LoadingPanel);

export default connect(
  mapStateToProps
)(styledComponent)
