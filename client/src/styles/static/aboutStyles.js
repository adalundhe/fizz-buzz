const toolTipStyle = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
    letterSpacing: '0.2em',
    fontWeight: '700',
    fontSize: "1em",
    backgroundColor: '#03A9F4',
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
  tooltip: {
    fontSize: "1em"
  }
});

const aboutStyle = {
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  margin: "12em",
  alignItems: "center",
  height: "20em",
  fontFamily: 'sans-serif',
  letterSpacing: '0.05em',
  aboutMessage: {
    fontSize: "1.5em",
    textTransform: 'lowercase'
  },
  aboutTooltipSection: {
    margin: "2em",
    marginLeft: "3em",
    marginRight: "3em"
  },
  aboutTooltipContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  displayContainer: {
    marginTop: "16em",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  aboutHeader: {
    marginBottom: "4em"
  }
}

const cardStyle = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    textAlign: "left"
  },
};

export {aboutStyle, toolTipStyle, cardStyle}
