import styled from 'styled-components';
import {
  rowFlexAttr,
} from '@/global/style';

export const SnackBarContainer = styled.div`
  bottom: -1000px;
	height: 0px;
	position: absolute;
	top: -1000px;
	width: 0px;

  .slideup-enter {
		bottom: -50px;
	}

	.slideup-enter.slideup-enter-active {
		bottom: 20px;
		transition: bottom 200ms linear;
	}

	.slideup-leave {
		bottom: 20px;
	}

	.slideup-leave.slideup-leave-active {
		bottom: -50px;
		transition: bottom 200ms linear;
	}
`;

export const SnackBarInnerContents = styled.div`
  align-items: stretch;
	background: #212121;
	bottom: 20px;
  box-shadow: 0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149);
  border-radius: 4px;
	display: ${props => props.open ? 'flex' : 'none'};
	flex-direction: row;
	left: 20px;
	min-width: 500px;
	position: fixed;
	z-index: 9999;
`;

export const SnackBarMessage = styled.div`
  color: #ffffff;
  flex: 1;
  font-size: 14px;
  line-height: 24px;
  padding: 10px 20px;
  vertical-align: middle;
`

export const CloseButton = styled.button`
  ${rowFlexAttr}
  background: transparent;
  border: 0px;
  cursor: pointer;
  flex: 0 0 24px;
  margin: 0px;
  margin-right: 10px;
  outline: none;
  padding: 0px;
  color: #ffffff;
`;