const customLinkStyle = {
  textAlign: "center",
  marginTop: "1em",
  marginBottom: "1em",
  marginLeft: "0.5em",
  marginRight: "0.5em",
  fontSize: "1.5em",
  fontFamily: "sans-serif",
  textTransform: "lowercase",
  reactLink: {
    textDecoration: "none",
    color: "#F5F5F5",
    marginLeft: "0.5em"
  },
  innerReactLink: {
    textDecoration: "none",
    color: "#F5F5F5",
    '&:hover': {
      textDecoration: "none",
      color: "#F5F5F5"
    },
    '&:active': {
      textDecoration: "none",
      color: "#F5F5F5"
    },
    '&:visited': {
      textDecoration: "none",
      color: "#F5F5F5"
    },
    '&:focus': {
      textDecoration: "none",
      color: "#F5F5F5"
    }
  },
  iconStyle: {
    color: "#F5F5F5"
  }
}

export default customLinkStyle
