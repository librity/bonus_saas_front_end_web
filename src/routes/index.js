import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LogIn from '~/pages/Auth/LogIn';
import SignUp from '~/pages/Auth/SignUp';
import Main from '~/pages/Main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
