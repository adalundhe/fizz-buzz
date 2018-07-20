const gameButtonStyle = theme => ({
  button: {
    margin: theme.spacing.unit,
    letterSpacing: '0.2em',
    fontWeight: '700',
    fontSize: "1em",
    backgroundColor: '#03A9F4',
    height: '8em',
    width: '8em',
    textTransform: 'lowercase',
    '&:hover': {
        backgroundColor: '#039BE5',
        borderColor: '#2196F3',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#2196F3',
        borderColor: '#039BE5',
    }
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  }
});

export default gameButtonStyle
