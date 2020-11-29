import React from 'react';
import { CSSTransitionGroup } from "react-transition-group";
import Icon from '@/icons';
import {
  DrawerContainer,
  DrawerInnerContents,
  TransitionGroup,
  Backdrop,
  CloseContainer,
  CloseButton,
} from './style';

const Drawer = ({ open, position, ...props }) => {
  return (
    <React.Fragment>
      <TransitionGroup>
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={150}
          transitionLeaveTimeout={150}
          transitionAppearTimeout={150}
          transitionAppear={true}
          transitionEnter={true}
          transitionLeave={true}
        >
          {open ? <Backdrop onClick={props.onClick} /> : null}
        </CSSTransitionGroup>
      </TransitionGroup>
      <DrawerContainer open={open}>
        <DrawerInnerContents position={position}>
          <CloseContainer position={position}>
            <CloseButton onClick={props.onClick} position={position}>
              <Icon glyph="close" size={32} />
            </CloseButton>
          </CloseContainer>
          {props.children}
        </DrawerInnerContents>
      </DrawerContainer>
    </React.Fragment>
  );
}

export default Drawer;