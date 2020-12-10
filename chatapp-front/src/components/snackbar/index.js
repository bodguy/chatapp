import React from 'react';
import { CSSTransitionGroup } from "react-transition-group";
import Icon from '@/icons';
import PropTypes from 'prop-types';
import {
  SnackBarContainer,
  SnackBarInnerContents,
  SnackBarMessage,
  CloseButton,
} from './style';

const SnackBar = ({ message, onClose, closeTimeout }) => {
  const content = message ? (
    <SnackBarInnerContents open>
      <SnackBarMessage>{message}</SnackBarMessage>
      <CloseButton onClick={onClose}>
        <Icon glyph="close" size={24} viewBox={24} />
      </CloseButton>
    </SnackBarInnerContents>
  ) : null;

  setTimeout(onClose, closeTimeout);

  return (
    <SnackBarContainer>
      <CSSTransitionGroup
        transitionName="slideup"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
        transitionAppearTimeout={200}
        transitionAppear={true}
        transitionEnter={true}
        transitionLeave={true}
      >
        {content}
      </CSSTransitionGroup>
    </SnackBarContainer>
  );
};

SnackBar.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  closeTimeout: PropTypes.number,
};

SnackBar.defaultProps = {
  message: '',
  closeTimeout: 5000,
}

export default SnackBar;