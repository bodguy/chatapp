import styled from 'styled-components';
import { LoadingBar } from '@/global/style';

export const LoadingBarContainer = styled.div`
  animation: ${LoadingBar} 2s 1;
  display: block;
  height: 2px;
  background-color: rgb(14,112,254);
  transition: width 0.2s;
  position: absolute;
  top:0;
  left:0;
  right:0;
  z-index:4;
`;