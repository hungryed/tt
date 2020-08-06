import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from "./utils/history";

function ActualApp() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/games/:id">
          <Game />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    <Router>
  );
}

export default ActualApp;
