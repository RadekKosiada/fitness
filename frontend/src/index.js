import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/data/1" component={App} />
      <Redirect from="/" to="/data/1" />
    </Switch>
  </BrowserRouter>
);


ReactDOM.render(
  routes,
  document.getElementById('root')
);

reportWebVitals();
