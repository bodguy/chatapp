import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';
import ImageZoom from 'react-medium-image-zoom';
import { Transition } from 'react-spring/renderprops';
import ImageLoader from '@/imageLoader';
import {
  ImagePlaceholderContainer,
  Placeholder,
} from './style';

const ImagePlaceholder = ({ src, lqipSrc, width, height, waypoint, inputRef, ...rest }) => {
  const size = { width, height };
  const success = loaded => <ImageZoom image={{ src: loaded, style: { ...size } }} zoomMargin="0" />;
  const failed = () => <Placeholder background={lqipSrc} />;
  const inBound = props => <ImageLoader style={props} src={src} success={success} failed={failed} />;
  const outBound = props => <Placeholder style={props} />;

  return (
    <ImagePlaceholderContainer {...size} style={rest.style} ref={inputRef}>
      <Transition
        items={waypoint}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
      >
        {show => show ? inBound : outBound}
      </Transition>
    </ImagePlaceholderContainer>
  );
}

const LazyImage = props => {
  const [waypoint, setWaypoint] = useState(false);
  const waypointEnter = () => setTimeout(() => setWaypoint(true), 200);
  const ImagePlaceholderWithRef = React.forwardRef(
    (props, ref) => <ImagePlaceholder inputRef={ref} {...props} />
  );

  return (
    <Waypoint onEnter={waypointEnter}>
      <ImagePlaceholderWithRef {...props} waypoint={waypoint} />
    </Waypoint>
  );
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  lqipSrc: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

LazyImage.defaultProps = {
  width: '200px',
  height: '200px',
};

export default LazyImage;
