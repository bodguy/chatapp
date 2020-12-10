import styled from 'styled-components';
import 'emoji-mart/css/emoji-mart.css';
import "@webscopeio/react-textarea-autocomplete/style.css";
import {
  RowFlex,
} from '@/global/style';

export const MessageWriterContainer = styled(RowFlex)`
  padding: 10px;
  height: auto;

  .rta {
    position: relative;
    height: auto;
    width: calc(100vw - 64px);
  }

  .rta__autocomplete {
    position: absolute;
    width: auto;
    background-color: white;
    border: 1px solid #ccc;
    z-index: 11;
  }

  .rta__autocomplete ul {
    list-style: none;
    text-align: left;
    margin-bottom: 0;
  }

  .rta__autocomplete li {
    cursor: pointer;
    float: left;
  }

  .rta__autocomplete li:hover {
    background-color: rgb(55, 168, 252);
    border-radius: 10px;
  }
`;

export const IconContainer = styled.div`
  color: #828c99;
  cursor: pointer;
  margin: 0 3px;
  transition: color 0.25s ease-out;
  align-self: flex-end;
  z-index: 10;

  &:hover {
    color: rgb(14, 112, 254);
    transition: color 0.25s ease-in;
  }
`;

export const EmojiMart = styled.span`
  bottom: 85px;
  right: 21px;
  width: 353px;
  position: absolute;
  z-index: 2;
`;