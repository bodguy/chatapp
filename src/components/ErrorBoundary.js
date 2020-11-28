import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const { FallbackComponent, children } = this.props;

    if (error) {
      if (FallbackComponent) {
        return <FallbackComponent error={error} />;
      }

      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;