import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/app" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
