import styled from 'styled-components';
import {
  RowFlex,
  ColumnFlex,
} from '@/global/style';

export const MessageHeaderContainer = styled(RowFlex)`
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ecf0f1;
`;

export const ProfileContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

export const ProfileImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 100%;
  width: 100%;
  height: 100%;
  border: 2px white solid;

  &:hover {
    z-index: 10;
  }
`;

export const StatusMessage = styled.div`
  margin-top: 10px;
  font-weight: 600;
  font-size: 12px;
  flex: 0 0 auto;
`;

export const CenterContainer = styled(ColumnFlex)`
  margin-left:auto;
  margin-right:auto;
`;

export const RightContainer = styled.div`
  align-self: center;
`;

export const IconContainer = styled.div`
  flex: 0 0 auto;
  align-self: center;
  color: #828c99;
  cursor: pointer;
  margin: 2px 3px;
  transition: color 0.25s ease-out;
  &:hover {
    color: rgb(14, 112, 254);
    transition: color 0.25s ease-in;
  }
`;