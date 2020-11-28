import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '@/PageNotFound';
import { routerPrefix } from 'utils/constants';
import { ValidationError } from 'utils/errors';

const Dashboard = () => (
    <div>
        <h3>
            <div>API_URL: {process.env.API_URL}</div>
            <div>PUBLIC_URL: {process.env.PUBLIC_URL}</div>
            <div>PROFILE: {process.env.PROFILE}</div>
            <div>NODE_ENV: {process.env.NODE_ENV}</div>
        </h3>
    </div>
);

const MainPage = () => (
    <div>
        This is main page
        <Switch>
          <Route exact path={routerPrefix} component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
    </div>
);

export default MainPage;