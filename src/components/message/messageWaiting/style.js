import styled from 'styled-components';
import {
  RowFlex,
  FadeInOut,
} from '@/global/style';

export const MessageWaitingBox = styled(RowFlex)`
  position: relative;
  width: 125px;
  height: 75px;
  align-items: center;
  justify-content: space-around;
  border-radius: 75px;
  background-color: #ddd;

  &::before, &::after {
    position: absolute;
    content: '';
    background: #ddd;
    border-radius: 100%;
  }

  &::before {
    bottom: 0;
    left: -6px;
    width: 25px;
    height: 25px;
  }

  &::after {
    bottom: -5px;
    left: -18px;
    width: 12.5px;
    height: 12.5px;
  }
`;

export const MessageWaitingBubble = styled.div`
  width: 20.83px;
  height: 20.83px;
  border-radius: 100%;
  background-color: #bbb;
  animation: ${FadeInOut} 1.5s infinite;
  animation-delay: 0.25s;

  &:first-of-type {
    margin-left: 20.83px;
    animation-delay: 0s;
  }

  &:last-of-type {
    margin-right: 20.83px;
    animation-delay: 0.5s;
  }
`;