import React from "react";
import Resizable from '@/resizable';
import InboxContainer from '@/inbox/inboxContainer';
import MessageBox from '@/message/messageBox';
import MessageWriter from '@/message/messageWriter';
import MessageHeader from '@/message/messageHeader';
import InboxHeader from '@/inbox/inboxHeader';
import {
  MessageViewContainer,
  InboxWrapper,
  InboxScroller,
  MessageBoxContainer,
  MessageBoxScroller,
} from './style';

const MessageView = () => {
  return (
    <MessageViewContainer>
      <Resizable minSizePercent='20%' maxSizePercent='45%'>
        <InboxWrapper right>
          <InboxHeader />
          <InboxScroller>
            <InboxContainer />
          </InboxScroller>
        </InboxWrapper>
      </Resizable>

      <MessageBoxContainer>
        <MessageBoxScroller>
          <MessageHeader />
          <MessageBox />
          <MessageWriter />
        </MessageBoxScroller>
      </MessageBoxContainer>
    </MessageViewContainer>
  );
};

export default MessageView;
