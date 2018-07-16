import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Home, About, FizzBuzz} from '../../components'

const Routes = (props) => {

  return (
    <div>
      {
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={'/fizzbuzz'} component={FizzBuzz} />
          <Route path={'/about'} component={About} />
        </Switch>
      }
    </div>
  )
}


export default Routes
