const homeStyle = {
  display: "flex",
  textAlign: "center",
  justifyContent: "space-evenly",
  flexDirection: "row",
  margin: "4em",
  marginTop: '6em',
  alignItems: "center",
  height: "20em",
  messageItem: {
    fontSize: "2em",
    fontFamily: 'sans-serif',
    textTransform: 'lowercase',
    letterSpacing: '0.2em'
  }
}

const homeDisplayStyle = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 0.1em',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: "1em",
    fontSize: "1em",
  },
  pos: {
    marginBottom: "1em",
    marginTop: "1em"
  },
  paragraph: {
    fontSize: "0.8em"
  }
};

export { homeStyle, homeDisplayStyle }
