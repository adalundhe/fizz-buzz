import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Home, About } from '../../components'
import { FizzBuzzContainer } from '../../containers'

const Routes = (props) => {

  return (
    <div>
      {
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={'/fizzbuzz'} component={FizzBuzzContainer} />
          <Route path={'/about'} component={About} />
        </Switch>
      }
    </div>
  )
}


export default Routes
