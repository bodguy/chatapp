import React from 'react';
import Linkify from 'linkifyjs/react';
import {
  ItemContainer,
  Message,
  Date,
  Contents,
  Image,
  MessageImage,
} from './style';

const Item = ({ msg, dateTime, who }) => (
  <Message who={who}>
    <Contents>
      <Linkify>{msg}</Linkify>
    </Contents>
    <Date who={who}>{dateTime}</Date>
  </Message>
);

const ImageItem = ({ msg, dateTime, who }) => (
  <MessageImage who={who}>
    <Image src={msg} alt={msg} />
    <Date who={who}>{dateTime}</Date>
  </MessageImage>
);

const MessageItem = ({ index, value }) => (
  <ItemContainer key={index}>
    {
      value.img ? (
        <ImageItem msg={value.msg} dateTime={value.dateTime} who={value.type ? 'mine' : 'your'} />
      ) : (
        <Item msg={value.msg} dateTime={value.dateTime} who={value.type ? 'mine' : 'your'} /> 
      )
    }
  </ItemContainer>
);

export default MessageItem;