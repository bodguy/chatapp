import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { ResizeArea } from './style';

class Resizable extends React.Component {
  static propTypes = {
    minSize: PropTypes.string,
    maxSize: PropTypes.string,
  };

  static defaultProps = {
    minSizePercent: '10%',
    maxSizePercent: '90%',
  };

  constructor(props) {
    super(props);
    const initialClientWidth = document.body.clientWidth;
    const { minSizePercent, maxSizePercent } = this.props;

    this.state = {
      originWidth: 0,
      originMouseX: 0,
      minSize: this.convertToRealSize(initialClientWidth, minSizePercent),
      maxSize: this.convertToRealSize(initialClientWidth, maxSizePercent),
      clientWidth: initialClientWidth,
    };
  }

  handleMouseMove = (e) => {
    const { originWidth, originMouseX } = this.state;
    const width = originWidth + (e.pageX - originMouseX);
    this.clampWidth(width);
  };

  clampWidth = (target) => {
    const { minSize, maxSize } = this.state;
    const children = ReactDOM.findDOMNode(this);

    if (target <= minSize) {
      children.style.flex = `0 0 ${minSize}px`;
      children.style.width = `${minSize}px`;
    } else if (target >= maxSize) {
      children.style.flex = `0 0 ${maxSize}px`;
      children.style.width = `${maxSize}px`;
    } else {
      children.style.flex = `0 0 ${target}px`;
      children.style.width = `${target}px`;
    }
  }

  convertToRealSize = (operand, multiplier) => Math.round(operand * parseFloat(multiplier) / 100.0);

  handleResize = _.debounce((e) => {
    const changeSize = e.currentTarget.innerWidth;
    const { clientWidth } = this.state;
    const { minSizePercent, maxSizePercent } = this.props;
    const children = ReactDOM.findDOMNode(this);

    this.setState({
      clientWidth: changeSize,
      minSize: this.convertToRealSize(changeSize, minSizePercent),
      maxSize: this.convertToRealSize(changeSize, maxSizePercent),
    }, () => {
      if (changeSize !== clientWidth) this.clampWidth(parseFloat(children.style.width));
    });
  }, 200);

  componentDidMount() {
    const children = ReactDOM.findDOMNode(this);
    const next = children.nextSibling;

    window.addEventListener('resize', this.handleResize);

    next.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.setState({
        originWidth: parseFloat(
          getComputedStyle(children, null)
            .getPropertyValue('width')
            .replace('px', ''),
        ),
        originMouseX: e.pageX,
      });
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', this.handleMouseMove);
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
    );
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        {children}
        <ResizeArea />
      </React.Fragment>
    );
  }
}

export default Resizable;