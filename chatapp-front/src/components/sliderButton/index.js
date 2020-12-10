import React from 'react';
import PropTypes from 'prop-types';
import {
  SliderControl,
  SliderContainer,
  SliderToggle,
} from './style';

const SliderButton = ({ id, size }) => {
  return (
    <SliderToggle size={size}>
      <input id={id} type="checkbox" />
      <SliderControl htmlFor={id} size={size} />
      <SliderContainer size={size} />
    </SliderToggle>
  );
};

SliderButton.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
};

SliderButton.defaultProps = {
  size: 'small',
}

export default SliderButton;