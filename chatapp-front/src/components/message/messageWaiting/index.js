import React from 'react';
import {
    MessageWaitingBox,
    MessageWaitingBubble,
} from './style';

const MessageWaiting = () => (
    <MessageWaitingBox>
        <MessageWaitingBubble />
        <MessageWaitingBubble />
        <MessageWaitingBubble />
    </MessageWaitingBox>
);

export default MessageWaiting;