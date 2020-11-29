import React from 'react';

const ErrorFallback = ({ error }) => (
    <div>
        <div>Oops!</div>
        <p>무언가 잘못 된것 같네요.</p>
        <p>Name: {error.name}</p>
        <p>Message: {error.message}</p>
        <p>Stacktrace: {error.stack.split("\n").map((line, i) => (<div key={i}>{line}</div>))}</p>
        <button onClick={() => window.location.reload(true)}>재시도</button>
    </div>
);

export default ErrorFallback;