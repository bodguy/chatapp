import React from 'react';
import Icon from '@/icons';
import SearchBox from '@/searchBox';
import {
  InboxHeaderContainer,
  OuterBoxContainer,
  InboxTitle,
  IconContainer,
} from './style'

const InboxHeader = () => (
  <OuterBoxContainer>
    <InboxTitle>메시지</InboxTitle>
    <InboxHeaderContainer>
      <SearchBox />
      <IconContainer>
        <Icon glyph="message" size={32} />
      </IconContainer>
    </InboxHeaderContainer>
  </OuterBoxContainer>
);

export default InboxHeader;