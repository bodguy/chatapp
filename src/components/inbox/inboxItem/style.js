import styled from 'styled-components';
import {
  RowFlex,
  ColumnFlex,
} from '@/global/style';

const size = 2.8;
const radius1 = size / 2;
const radius2 = size / 5;

export const InnerBox = styled(RowFlex)`
  justify-content: space-between;
  min-width: 200px;
`;

export const Thumbnail = styled.div`
  flex: 0 0 auto;
  margin-right: 15px;

  position: relative;
  width: ${size}rem;
  height: ${size + radius2}rem;
  border-radius: ${radius1}rem/${radius2}rem;
	background: url('${props => props.profile}') no-repeat center center/cover;
	box-sizing: border-box;
  text-align: center;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: ${radius2 / 2}rem;
    left: ${-1 * radius2 / 2}rem;
    width: ${size + radius2}rem;
    height: ${size}rem;
    z-index: 0;
    background: url('${props => props.profile}') no-repeat center center/cover;
    border-radius: ${radius2}rem/${radius1}rem;
    box-sizing: border-box;
    text-align: center;
  }
`;

export const Name = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
`;

export const Contents = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Topic = styled(ColumnFlex)`
  flex: 1 1 auto;
  min-width: 0;
`;

export const Stats = styled.div`
  font-size: ${props => props.theme.verySmallFontSize};
  flex: 0 0 auto;
`;

export const InboxItemContainer = styled(ColumnFlex)`
  max-width: 100%;
  min-width: 0px;
  overflow: hidden;
  padding: 12px 20px 12px 12px;
  position: relative;
  border-bottom: 1px solid #dae3ed;
  cursor: pointer;
  background: ${props => (props.active ? '#0073f9' : 'rgb(255, 255, 255)')};
  font-size: ${props => props.theme.smallFontSize};
  border-radius: ${props => (props.active ? '6px' : '0px')};

  ${Name} {
    color: ${props => (props.active ? '#eff0f1' : '#121212')};
  }

  ${Contents} {
    color: ${props => (props.active ? '#eff0f1' : '#919191')};
  }

  ${Stats} {
    color: ${props => (props.active ? '#eff0f1' : '#121212')};
  }
`;