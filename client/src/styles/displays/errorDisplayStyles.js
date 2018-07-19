const errorDisplayStyle = {
  marginTop: "10em",
  fontSize: "2em",
  fontFamily: "sans-serif",
  textTransform: "lowercase",
  letterSpace: "0.1em",
  display: "flex",
  justifyContent: "center"
}

const errorDisplayCard = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '20%',
    paddingTop: "1em",
    paddingBottom: "1em"
  },
});


export { errorDisplayStyle, errorDisplayCard }
