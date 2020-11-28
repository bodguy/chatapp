import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from 'views/MainPage';

const Routes = () => (
    <Switch>
        <Route to="/" component={MainPage} />
    </Switch>
);

export default Routes;