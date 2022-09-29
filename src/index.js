import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Wallet from './pages/Wallet/index';
import Login from './pages/Login/index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/carteira">
        <Wallet />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
