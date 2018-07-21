import React from 'react';
import { CustomLink } from './customLink.js'
import { NAVBAR_LINK_PARAMS } from '../../constants'
import {navBarStyle} from '../../styles'

const NavBar = () =>
  <div style={navBarStyle}>
    {
      NAVBAR_LINK_PARAMS.map((link_params, idx) =>
        <CustomLink {...link_params} key={idx} />
      )
    }
  </div>

export default NavBar
