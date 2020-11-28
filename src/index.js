import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'hot-routes';
import history from 'utils/history';
import { Router } from 'react-router-dom';
import ErrorBoundary from '@/ErrorBoundary';
import ErrorFallback from '@/ErrorFallback';

const App = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Router history={history}>
                <Routes />
            </Router>
        </ErrorBoundary>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));