import React from 'react';
import PropTypes from 'prop-types';
import {
  LoadingContainer,
  Circular,
  Path,
} from './style';

const loaderSize = {
  small: '20px',
  medium: '30px',
  large: '50px',
}

const LoadingSpinner = ({ size }) => {
  const pixelSize = loaderSize[size];

  return (
    <LoadingContainer size={pixelSize}>
      <Circular viewBox="25 25 50 50">
        <Path cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
      </Circular>
    </LoadingContainer>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

LoadingSpinner.defaultProps = {
  size: 'small',
}

export default LoadingSpinner;