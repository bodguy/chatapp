import styled from 'styled-components';
import {
  ColumnFlex,
  rowFlexAttr,
} from '@/global/style';

export const DrawerContainer = styled.div`
  display: ${props => props.open ? 'flex' : 'none'};
	height: 0px;
	left: -1000px;
	position: fixed;
	top: -1000px;
	width: 0px;
  z-index: 9999;
`;

export const DrawerInnerContents = styled(ColumnFlex)`
  background: white;
	box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	overflow: hidden;
	position: fixed;
	width: 350px;
  left: ${props => props.position === 'left' ? '0px' : 'auto'};
	right: 0px;
  top: 0px;
  bottom: 0px;

  > ul {
    margin: 10px;
    padding: 10px 0px;

    li {
      ${rowFlexAttr}
      list-style: none;
      margin: 0px;
      padding: 0px 10px;
    }
  }
`;

export const TransitionGroup = styled.div`
  .fade-enter {
		opacity: 0.01;

		&.fade-enter-active {
			opacity: 1;
			transition: opacity 150ms ease-in;
		}
	}

	.fade-leave {
		opacity: 1;

		&.fade-leave-active {
			opacity: 0.01;
			transition: opacity 150ms ease-in;
		}
	}
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.54);
	bottom: 0px;
	left: 0px;
	position: fixed;
	right: 0px;
	top: 0px;
  z-index: 9998;
`;

export const CloseContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.position === 'left' ? 'row-reverse' : 'row'};
  flex: 0 0 auto;
  margin: 0px;
  border-bottom: 1px solid #eceff1;
`;

export const CloseButton = styled.button`
  color: #828c99;
  cursor: pointer;
  border: 0px;
  background: transparent;
  outline: none;
  padding: ${props => props.position === 'left' ? '10px 10px 0 0' : '10px 0 0 10px'};

  transition: color 0.25s ease-out;
  &:hover {
    color: rgb(14, 112, 254);
    transition: color 0.25s ease-in;
  }
`;