import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { aboutStyle, cardStyle } from '../../../../styles'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const StartGameDisplay = (props) => {
  const { classes } = props;

  if (props.showStartGameInfo){
    return (
      <div style={aboutStyle.aboutTooltipSection} >
        <Card className={classes.card}>
         <CardContent>
           <Typography className={classes.title} >
             Part One
           </Typography>
           <Typography component="p" color="textSecondary" className={classes.pos}>
              <em>{'"FizzBuzz!"'}</em> is a one of the first computer<br />
              programs any  programmer writes. This is an <br />
              interactive take on this classic program.
              <br />
              To start click:
              <br />
           </Typography>
           <Typography component="p" color="textSecondary">
                  <em>{'"play fizz buzz!"'}</em>
           </Typography>
           <Typography component="p" color="textSecondary" className={classes.pos}>
              <br/>
              above.
              The game will start automatically.
           </Typography>
         </CardContent>
         <CardActions>
           <Button size="small"
            onClick={() =>
              window.open("http://wiki.c2.com/?FizzBuzzTest", "_blank")
            }
            >
              Learn More
            </Button>
         </CardActions>
       </Card>
      </div>
    )
  }

  return null

}

StartGameDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ about }) => ({
  showStartGameInfo: about.showStartGameInfo
})

const styledComponent = withStyles(cardStyle)(StartGameDisplay)

export default connect(
  mapStateToProps
)(styledComponent);
