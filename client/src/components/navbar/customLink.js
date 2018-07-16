import React from 'react';
import { Link } from 'react-router-dom'
import {customLinkStyle} from '../../styles'
import {Icon} from 'react-fa'

const CustomLink = (props) => {
  const linkData = {...props}

  return (
    <div style={customLinkStyle}>
      <Icon
        name={linkData.icon}
        style={customLinkStyle.iconStyle} 
      />
      <Link
        to={linkData.routeLink}
        style={customLinkStyle.reactLink}
      >
        {linkData.routeName}
      </Link>
    </div>
  )
}


  export { CustomLink }
