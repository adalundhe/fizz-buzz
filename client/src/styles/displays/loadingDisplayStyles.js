const loadingDisplayStyle = {
  container: {
    display: "flex",
    width: '100%',
    textAlign: 'center',
    justifyContent: "center",
    fontFamily: 'sans-serif',
    marginTop: "16em"
  }
}

const loadingProgressBarStyle = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    color: '#039BE5'
  },
});

export { loadingDisplayStyle, loadingProgressBarStyle }
