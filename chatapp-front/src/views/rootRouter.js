import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '@/pageNotFound';
import { routerPrefix } from 'utils/constants';
import Dashboard from 'views/dashboard';
import MessageView from 'views/messageView';
import loginView from 'views/loginView';

const RootRouter = () => (
    <Switch>
        <Route exact path={routerPrefix} component={Dashboard} />
        <Route exact path={`${routerPrefix}/message`} component={MessageView} />
        <Route exact path={`${routerPrefix}/login`} component={loginView} />
        <Route component={PageNotFound} />
    </Switch>
);

export default RootRouter;