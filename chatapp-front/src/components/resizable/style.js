import styled from 'styled-components';
import { ColumnFlexOverflowY } from '@/global/style';

export const ResizeArea = styled(ColumnFlexOverflowY)`
  flex: 0 0 24px;
  cursor: ew-resize;
  box-sizing: border-box;
  border-left: 2px solid #4286f4;
  opacity: 0;
  transition: opacity 200ms ease-out 0s;
  &:hover {
    opacity: 1;
    transition: opacity 200ms ease-in 0s;
  };
`;