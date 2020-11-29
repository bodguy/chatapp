import styled, { css } from 'styled-components';
import {
  HoverTransition,
} from '@/global/style';

export const ItemContainer = styled.div``;

const MessageBoxAttr = css`
  max-width: 70%;
  word-wrap: break-word;
  margin-bottom: 10px;
  position: relative;
  padding: 9px 15px;
  border-radius: 20px;
  clear: both;
  font-weight: 500;
  font-size: ${props => props.theme.smallFontSize};
`;

const DateAttr = css`
  font-size: ${props => props.theme.smallFontSize};
  color: ${props => props.theme.color.messageDate};
  position: absolute;
  top: -15px;
  left: auto;
  right: 0;
  white-space: nowrap;
  vertical-align: middle;
  opacity: 0;
  z-index: 4;

  ${ItemContainer}:hover & {
    opacity: 1;
  }
`;

const SpeechBubbleBefore = css`
  content: "";
  position: absolute;
  z-index: 0;
  bottom: 0;
  height: 20px;
  width: 20px;
`;

const SpeechBubbleAfter = css`
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 10px;
  height: 20px;
  background: ${props => props.theme.color.messageBox};
`;

const MyMessageAttr = css`
  &::before {
    ${SpeechBubbleBefore}
    background: ${props => props.theme.color.myMessageBackground};
    background-attachment: fixed;
    border-bottom-left-radius: 15px;
    right: -8px;
  }

  &::after {
    ${SpeechBubbleAfter}
    border-bottom-left-radius: 10px;
    right: -10px;
  }
`;

const YourMessageAttr = css`
  &::before {
    ${SpeechBubbleBefore}
    background: ${props => props.theme.color.yourMessageBackground};
    background-attachment: fixed;
    border-bottom-right-radius: 15px;
    left: -7px;
  }

  &::after {
    ${SpeechBubbleAfter}
    border-bottom-right-radius: 10px;
    left: -10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 18px;
  float: right;
  margin: 0;
`;

export const MessageImage = styled(HoverTransition)`
  ${MessageBoxAttr}
  float: ${props => props.who === 'mine' ? 'right' : 'left'};
  padding: 0;
`;

export const Message = styled(HoverTransition)`
  ${MessageBoxAttr}
  ${props => props.who === 'mine' ? MyMessageAttr : YourMessageAttr}
  background: ${props => props.who === 'mine' ? props.theme.color.myMessageBackground : props.theme.color.yourMessageBackground};
  color: ${props => props.who === 'mine' ? props.theme.color.myMessage : props.theme.color.yourMessage};
  float: ${props => props.who === 'mine' ? 'right' : 'left'};
`;

export const Date = styled.span`
  ${DateAttr}
  left: ${props => props.who === 'mine' && '5%'};
  right: ${props => props.who !== 'mine' && '5%'};
`;

export const Contents = styled.p`
  max-width: 560px;
  margin:0;
  word-break: break-all;
`;