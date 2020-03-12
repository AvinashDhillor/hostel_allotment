import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Hostel from "../components/Hostel";
import Branch from "../components/Branch";
import Session from "../components/Session";
import NotFound from "../components/NotFound";
import UserDetail from "../components/UserDetail";
import Notice from "../components/Notice";

export const history = createHistory();

export default () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={Login} exact={true}></PublicRoute>
      <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
      <PrivateRoute path="/user/:id" component={UserDetail}></PrivateRoute>
      <PrivateRoute path="/notice" component={Notice}></PrivateRoute>
      <PrivateRoute path="/hostels" component={Hostel}></PrivateRoute>
      <PrivateRoute path="/branches" component={Branch}></PrivateRoute>
      <PrivateRoute path="/session" component={Session}></PrivateRoute>
      <Route component={NotFound}></Route>
    </Switch>
  </Router>
);
