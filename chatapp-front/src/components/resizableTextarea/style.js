import styled from 'styled-components';
import {
  overflowHide,
} from '@/global/style';

export const TextArea = styled.textarea`
  position: absolute;
  bottom:0;
  z-index: 10;
  border-radius: 20px;
  padding: 7px 12px;
  border: 1px solid #e0e0e0;
  font-size: 13px;
  line-height: 24px;
  height: auto;
  width: fill-available;
  resize: none;
  ${overflowHide('y')}

  &:focus {
    outline: none;
    border: 1px solid rgb(14, 112, 254);
  }
  &::placeholder {
    color: #dcdcdc;
    letter-spacing: 0px;
  }
`;