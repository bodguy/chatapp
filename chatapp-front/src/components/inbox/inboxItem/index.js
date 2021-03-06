import React from 'react';
import { 
  InboxItemContainer, 
  InnerBox, 
  Thumbnail, 
  Contents,
  Name,
  Topic,
  Stats,
} from './style';

const InboxItem = ({ index, thumbnailPath, name, dateTime, active, onClick, ...props }) => (
  <InboxItemContainer key={index} active={active} onClick={onClick}>
    <InnerBox>
      <Thumbnail profile={thumbnailPath} />
      <Topic>
        <Name>{name}</Name>
        <Contents>
          {props.children}
        </Contents>
      </Topic>
      <Stats>
        {dateTime}
      </Stats>
    </InnerBox>
  </InboxItemContainer>
);

export default InboxItem;