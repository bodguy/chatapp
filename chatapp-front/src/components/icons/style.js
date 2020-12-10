import styled from 'styled-components';

export const SvgContainer = styled.div`
  display: inline-block;
`;

export const SvgInline = styled.svg`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  stroke-linecap: round;
  stroke-width: 0.1;
  fill: currentColor;
  stroke: currentColor;
`;