import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './views/Home';

let history = createBrowserHistory();

const routes = [
  {
    id: 1,
    path: '/',
    component: Home
  }
]

class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {
            routes.map(route => (
              <Route
                key={route.id}
                path={route.path}
                render={props => (
                  <route.component {...props} />
                )}
              />
            ))
          }
        </Switch>
      </Router>
    )
  }
}

export default AppRouter;
