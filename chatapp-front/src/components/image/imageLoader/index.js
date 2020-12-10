import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-spring/renderprops';

const Status = {
  PENDING: 'pending',
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
};

class ImageLoader extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    success: PropTypes.func.isRequired,
    failed: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { status: props.src ? Status.LOADING : Status.PENDING };
  }

  componentDidMount() {
    if (this.state.status === Status.LOADING) {
      this.createLoader();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.setState({
        status: nextProps.src ? Status.LOADING : Status.PENDING,
      });
    }
  }

  componentDidUpdate() {
    if (this.state.status === Status.LOADING && !this.img) {
      this.createLoader();
    }
  }

  componentWillUnmount = () => {
    this.destroyLoader();
  }

  createLoader = () => {
    this.destroyLoader();
    const img = new Image();
    img.onload = this.handleLoad;
    img.onerror = this.handleError;
    img.src = this.props.src;
    img.srcset = this.props.src;
    this.img = img;
  }

  destroyLoader = () => {
    if (this.img) {
      this.img.onload = null;
      this.img.onerror = null;
      this.img = null;
    }
  }

  handleLoad = () => {
    this.destroyLoader();
    setTimeout(() => {
      this.setState({ status: Status.LOADED });
    }, 300);
  }

  handleError = () => {
    this.destroyLoader();
    this.setState({ status: Status.FAILED });
  }

  render() {
    const { src, success, failed } = this.props;
    const { status } = this.state;
    const inBound = props => <div style={props}>{success(src)}</div>;
    const outBound = props => <div style={props}>{failed()}</div>;

    return (
      <Transition
        items={status === Status.LOADED}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
      >
        {show => show ? inBound : outBound}
      </Transition>
    );
  }
}

export default ImageLoader;