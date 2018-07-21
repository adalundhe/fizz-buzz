import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { aboutStyle, cardStyle } from '../../../../styles'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const PlayGameDisplay = (props) => {
  const { classes } = props;

  if (props.showPlayGameInfo){
    return (
      <div style={aboutStyle.aboutTooltipSection}>
        <Card className={classes.card}>
         <CardContent>
           <Typography className={classes.title} >
             Part Two
           </Typography>
           <Typography component="p" color="textSecondary" className={classes.pos}>
              <em>Better act fast, {"you're"} up against a timer!</em>
              <br /><br />
              You only have a few seconds to guess <br />
              whether each number displayed is evenly <br />
              divisible by 3, 5, <em>both</em>, or <em>neither.</em>
              <br />
           </Typography>
           <Typography component="p" color="textSecondary" className={classes.pos}>
              Guess correctly which, and {"you'll"} increase <br />
              your score. Guess wrong, and your score <br />
              will take a penalty.
           </Typography>
         </CardContent>
       </Card>
      </div>
    )
  }

  return null
}

PlayGameDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ about }) => ({
  showPlayGameInfo: about.showPlayGameInfo
})

const styledComponent = withStyles(cardStyle)(PlayGameDisplay)

export default connect(
  mapStateToProps
)(styledComponent);
