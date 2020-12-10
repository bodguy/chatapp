import styled from 'styled-components';

export const ImagePlaceholderContainer = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const Placeholder = styled.div`
  background: ${props => (props.background ? `url(${props.background})` : '#f0f0f0')} no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;