import React from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getData } from '../../../actions'
import { withStyles } from '@material-ui/core/styles';
import { gameButtonStyle, numberButtonContainerStyle, customLinkStyle } from '../../../styles'
import Button from '@material-ui/core/Button';


const SkipSubmitButton = (props) => {

  const { classes } = props;
  console.log(classes)

  return (
    <div style={numberButtonContainerStyle}>
      <Link to="/fizzbuzz/play" style={customLinkStyle.innerReactLink}>
        <Button
          variant="fab"
          color="primary"
          className={classes.button}
          onClick={() => props.getData()}
        >
        Skip...
        </Button>
      </Link>
    </div>
  )
}

SkipSubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ fizzBuzz }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)


const styledInput =  withStyles(gameButtonStyle)(SkipSubmitButton);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledInput)
