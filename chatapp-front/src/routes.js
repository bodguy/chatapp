import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RootRouter from 'views/rootRouter';

const Routes = () => (
    <Switch>
        <Route to="/" component={RootRouter} />
    </Switch>
);

export default Routes;