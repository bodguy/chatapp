import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '@/pageNotFound';
import { routerPrefix } from 'utils/constants';
import MessageView from 'views/messageView';
import Dashboard from 'views/dashboard';

const RootRouter = () => (
    <Switch>
        <Route exact path={routerPrefix} component={Dashboard} />
        <Route exact path={`${routerPrefix}/message`} component={MessageView} />
        <Route component={PageNotFound} />
    </Switch>
);

export default RootRouter;