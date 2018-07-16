import React from 'react';
import { Link } from 'react-router-dom'
import {customLinkStyle} from '../../styles'

const CustomLink = (props) => {
  const linkData = {...props}

  return (
    <div style={customLinkStyle}>
      <Link to={linkData.routeLink}>{linkData.routeName}</Link>
    </div>
  )
}


  export { CustomLink }
