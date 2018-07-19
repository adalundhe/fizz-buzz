import React from 'react'
import { connect } from 'react-redux'
import { errorDisplayStyle, errorDisplayCard } from '../../../styles'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const ErrorPanel = (props) => {
  const { classes } = props;

  if (props.hasErrored) {
    return (
      <div style={errorDisplayStyle}>
        <Paper className={classes.root} elevation={1}>
         <Typography variant="headline" component="h3">
           An error has occured
         </Typography>
         <Typography component="p">
           Please try refreshing the page.
         </Typography>
       </Paper>
      </div>
    )
  }
  else {
    return null
  }
}

ErrorPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ fizzBuzz }) => ({
  hasErrored: fizzBuzz.hasErrored
})

const styledComponent = withStyles(errorDisplayCard)(ErrorPanel);

export default connect(
  mapStateToProps
)(styledComponent)
