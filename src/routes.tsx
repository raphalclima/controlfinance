import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  MainPage, LoginPage, ForgotPage, SignupPage, ResetPasswordPage,
} from './pages';

export default function MainRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/forgot" component={ForgotPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/reset_password/:token" component={ResetPasswordPage} />
    </Switch>
  );
}
