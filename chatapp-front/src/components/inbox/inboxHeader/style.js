import styled from 'styled-components';
import {
  RowFlex,
  ColumnFlex,
} from '@/global/style';

export const InboxHeaderContainer = styled(RowFlex)`
  overflow: hidden;
  min-width: 200px;
  margin-bottom: 10px;
`;

export const OuterBoxContainer = styled(ColumnFlex)`
  background: white;
`;

export const InboxTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
  margin: 15px 20px 0px;
`;

export const IconContainer = styled.div`
  flex: 0 0 auto;
  align-self: center;
  color: #828c99;
  cursor: pointer;
  margin: 2px 7px 2px 3px;
  transition: color 0.25s ease-out;
  &:hover {
    color: rgb(14, 112, 254);
    transition: color 0.25s ease-in;
  }
`;