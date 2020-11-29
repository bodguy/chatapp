import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'hot-routes';
import { Router } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import theme from 'theme';
import history from 'utils/history';
import { ErrorBoundary, ErrorFallback } from '@/error';

const Body = styled.main`
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.color.background};
  color: ${props => props.theme.color.font};
  font-size: ${props => props.theme.fontSize};
  font-weight: ${props => props.theme.fontWeight};
  font-style: ${props => props.theme.fontStyle};
  letter-spacing: ${props => props.theme.letterSpacing};
  line-height: ${props => props.theme.lineHeight};
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Body>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Router history={history}>
                        <Routes />
                    </Router>
                </ErrorBoundary>
            </Body>
        </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));