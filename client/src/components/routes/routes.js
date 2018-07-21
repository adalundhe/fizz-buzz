import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Home, About } from '../../components'
import { FizzBuzzContainer, NumberFormContainer } from '../../containers'

const Routes = (props) => {

  return (
    <div>
      {
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={'/fizzbuzz'} component={NumberFormContainer} />
          <Route path={'/fizzbuzz/play'} component={FizzBuzzContainer} />
          <Route path={'/about'} component={About} />
        </Switch>
      }
    </div>
  )
}


export default Routes
