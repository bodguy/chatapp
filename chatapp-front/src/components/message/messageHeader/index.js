import React, { useState } from "react";
import Icon from '@/icons';
import ControlPanel from '@/controlPanel';
import {
  MessageHeaderContainer,
  ProfileContainer,
  ProfileImage,
  StatusMessage,
  CenterContainer,
  RightContainer,
  IconContainer,
} from './style';

const MessageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleControlPanel = () => setIsOpen(!isOpen);

  return (
    <MessageHeaderContainer>
      <CenterContainer>
        <ProfileContainer>
          <ProfileImage src="/public/img/profile1.jpg" />
          <ProfileImage src="/public/img/profile2.jpg" style={{ left: '20px' }} />
          <ProfileImage src="/public/img/profile3.jpeg" style={{ left: '40px' }} />
        </ProfileContainer>
        <StatusMessage>3 People ></StatusMessage>
      </CenterContainer>

      <RightContainer>
        <IconContainer onClick={toggleControlPanel}>
          <Icon glyph="controls" size={32} />
        </IconContainer>
      </RightContainer>

      <ControlPanel onClick={toggleControlPanel} open={isOpen} />
    </MessageHeaderContainer>
  );
};

export default MessageHeader;