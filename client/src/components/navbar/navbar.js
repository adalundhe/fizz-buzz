import React from 'react';
import { CustomLink } from './customLink.js'
import {LinkParams} from '../../constants'
import {navBarStyle} from '../../styles'

const NavBar = () =>
  <div style={navBarStyle}>
    {
      LinkParams.map((link_params, idx) =>
        <CustomLink {...link_params} key={idx} />
      )
    }
  </div>

export default NavBar
