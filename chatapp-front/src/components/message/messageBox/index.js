import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import MessageItem from '@/message/messageItem';
import LoadingSpinner from '@/loading/loadingSpinner';
import {
  MessageBoxContainer,
  Messages,
  DateTime,
} from './style';
import { messageContents } from 'mock';

const MessageBox = () => {
  const [messages] = useState(messageContents);

  return (
    <MessageBoxContainer>
      <Messages>
        <LoadingSpinner size="medium" />
        <DateTime>2019. 1. 17. 11:04</DateTime>
        <InfiniteScroll
          pageStart={0}
          loadMore={page => console.log(page)}
          hasMore={true}
          useWindow={false}
          isReverse={true}
        >
          {messages.map((v, i) => <MessageItem index={i} value={v} key={`msg-${i}`} />)}
        </InfiniteScroll>
      </Messages>
    </MessageBoxContainer>
  );
}

export default MessageBox;