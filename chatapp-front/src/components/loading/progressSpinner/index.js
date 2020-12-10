import React from 'react';
import PropTypes from 'prop-types';
import {
  ProgressContainer,
} from './style';

const ProgressSpinner = ({ progress, size }) => (
  <ProgressContainer progress={progress} size={size} />
);

ProgressSpinner.propTypes = {
  progress: PropTypes.number,
  size: PropTypes.string,
};

ProgressSpinner.defaultProps = {
  progress: 0,
  size: "3rem",
};

export default ProgressSpinner;