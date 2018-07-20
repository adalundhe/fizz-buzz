import React from 'react';
import {NavBar, Routes} from './components'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () =>
  <div>
    <Router>
      <div>
        <NavBar />
        <Routes />
      </div>
    </Router>
  </div>

export default App
