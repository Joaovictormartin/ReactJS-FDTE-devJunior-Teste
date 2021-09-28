import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, Map } from '../pages';

export function Routes() {
  return (
    <Switch>
      <Route path="/map" component={Map} />
      <Route path="/" exact component={Home} />
      <Redirect from='*' to='/' />
    </Switch>
  )
}