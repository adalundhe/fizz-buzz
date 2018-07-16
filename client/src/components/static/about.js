import React from 'react'
import { aboutStyle } from '../../styles'

const About = () =>
  <div style={aboutStyle}>
    <em style={aboutStyle.aboutMessage}>
      This was created as a part of the ClientHub challenge!
    </em>
    <br/>
    <p>
      This application utilizes a NodeJS/React frontend, Golang API, and
      Google Cloud Functions all wrapped by Docker containers.
    </p>
  </div>

export default About
