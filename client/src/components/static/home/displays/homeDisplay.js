import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { homeDisplayStyle } from '../../../../styles'

const HomeDisplay = (props) => {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Fizz{bull}Buzz
          </Typography>
          <Typography variant="headline" component="h2">
            a{bull}{"programmer's"}{bull}game
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            2018
          </Typography>
          <Typography component="p" color="textSecondary" className={classes.paragraph}>
            read the about first for how to play.<br />
            <em>you know you want to...</em>
          </Typography>
        </CardContent>
      </Card>
  )
}

HomeDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(homeDisplayStyle)(HomeDisplay);
