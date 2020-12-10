import styled from 'styled-components';
import {
  Rotate,
  Dash,
  Color
} from '@/global/style';

export const LoadingContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${props => (props.size)};
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export const Circular = styled.svg`
  animation: ${Rotate} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Path = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${Dash} 1.5s ease-in-out infinite, ${Color} 6s ease-in-out infinite;
  stroke-linecap: round;
`;
