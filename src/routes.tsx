import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  MainPage, DashboardPage, FinancesPage, LoginPage, ForgotPage, SignupPage, ResetPasswordPage,
} from './pages';

export default function PublicRoutes() {
  return (
    <Switch>
      <Route exact path="/app" component={MainPage} />
      <Route exact path="/app/dashboard" component={DashboardPage} />
      <Route exact path="/app/finances" component={FinancesPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/forgot" component={ForgotPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/reset_password/:token" component={ResetPasswordPage} />
      <Route exact path="*" component={MainPage} />
    </Switch>
  );
}
