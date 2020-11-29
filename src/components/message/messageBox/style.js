import styled from 'styled-components';
import {
  ColumnFlex,
  overflowHide,
} from '@/global/style';

export const MessageBoxContainer = styled(ColumnFlex)`
  * {
    box-sizing:border-box;
  }

  a {
    text-decoration: underline;
    color: black;
  }
`;

export const Messages = styled.div`
  * {
    transition:all .5s;
    background-attachment: fixed;
  }

  display: block;
  ${overflowHide('x')}
  overflow-y: scroll;
  position: relative;
  max-height: calc(100vh - 150px);
  width: 100%;
  padding: 2% 3%;
  border-bottom: 1px solid #ecf0f1;
  background: ${props => props.theme.color.messageBox};
`;

export const DateTime = styled.div`
  font-size: ${props => props.theme.smallFontSize};
  color: ${props => props.theme.color.messageDate};
  text-align: center;
  clear: both;
  padding: 5px;
`;