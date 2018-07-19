import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { aboutStyle, cardStyle } from '../../../../styles'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ScoringGameDisplay = (props) => {
  const { classes } = props;

  if (props.showScoringGameInfo) {
    return (
      <div style={aboutStyle.aboutTooltipSection}>
        <Card className={classes.card}>
         <CardContent>
           <Typography className={classes.title} >
             Part Three
           </Typography>
           <Typography component="p" color="textSecondary" className={classes.pos}>
              If a number is evenly divisible by 3, then <br />
              click:
              <em>{'"Fizz!"'}</em> for three points.
              <br />
           </Typography>
           <Typography component="p" color="textSecondary" className={classes.pos}>
             If the number is evenly divisible by 5, then <br/>
             click:
             <em>{'"Buzz!"'}</em> for five points.<br />
           </Typography>
           <Typography component="p" color="textSecondary" className={classes.pos}>
             If the number is evenly divisible by <em>both</em>, <br/>
             then click:
             <em>{'"FizzBuzz!"'}</em> for fifteen points.<br />
           </Typography>
           <Typography component="p" color="textSecondary" className={classes.pos}>
             If the number is evenly divisible by <em>neither</em>, <br/>
             then click:
             <em>{'"Pass!"'}</em> to skip to the next <br />
             number.
           </Typography>
           <Typography component="p" color="textSecondary" className={classes.pos}>
             If you incorrectly guess a number, you will be <br />
             assesed a penalty equal to the points you <br />
             would have gained.
           </Typography>
         </CardContent>
       </Card>
      </div>
    )
  }

  return null
}

ScoringGameDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ about }) => ({
  showScoringGameInfo: about.showScoringGameInfo
})

const styledComponent = withStyles(cardStyle)(ScoringGameDisplay)

export default connect(
  mapStateToProps
)(styledComponent);
