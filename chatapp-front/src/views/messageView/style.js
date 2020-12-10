import styled from 'styled-components';
import {
  RowFlexOverflowY,
  ColumnFlexOverflowY,
} from '@/global/style';

export const MessageViewContainer = styled(RowFlexOverflowY)`
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  flex: auto;
`;

export const InboxWrapper = styled(ColumnFlexOverflowY)`
  flex: ${props => (props.right ? '0 0 440px' : 'auto')};
  border-right: ${props => (props.right ? '1px solid #dae3ed' : 'none')};
  align-self: stretch;
`;

export const InboxScroller = styled.div`
  width: 100%;
  overflow-y: auto;
  position: relative;
`;

export const MessageBoxContainer = styled(RowFlexOverflowY)`
  flex: 1 1 auto;
  align-self: stretch;
  min-width: 300px;
`;

export const MessageBoxScroller = styled.div`
  width: 100%;
  overflow-y: auto;
`;