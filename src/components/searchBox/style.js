import styled, { css } from 'styled-components';
import {
  RowFlex,
} from '@/global/style';

export const SearchBarContainer = styled.div`
  padding: 4px 10px 4px 10px;
  flex: 1 1 auto;
`;

export const SearchForm = styled(RowFlex)`
  background: rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0);
  border-radius: 4px;
  height: 36px;
  width: 100%;
`;

export const IconHover = styled.div`
  &:hover {
    background-color: rgb(236,236,236);
    border-radius: 50%;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  background: transparent;
  border: none;
  height: 34px;
  outline: none;
  padding: 11px 16px 11px 2px;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  &::placeholder {
    color: #dcdcdc;
    letter-spacing: 0px;
  }
`;

export const cursorPointer = css`
  cursor: pointer;
  text-decoration: none;
`;

export const PlainButton = styled.button`
  ${cursorPointer}
  background: none;
  border: none;
  outline: none;
  padding: 0 6px;
  line-height: 0;
`;