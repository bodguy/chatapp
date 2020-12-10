import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const overflowHide = direction => (`
    overflow-${direction}: hidden;
`);

export const rowFlexAttr = css`
  display: flex;
  flex-direction: row;
`;

export const columnFlexAttr = css`
  display: flex;
  flex-direction: column;
`;

export const RowFlex = styled.div`
  ${rowFlexAttr}
`;

export const ColumnFlex = styled.div`
  ${columnFlexAttr}
`;

export const RowFlexOverflowY = styled(RowFlex)`
  ${overflowHide('y')}
`;

export const ColumnFlexOverflowY = styled(ColumnFlex)`
  ${overflowHide('y')}
`;

export const NavLink = styled(Link)`
  color: ${props => props.theme.color.link};
  text-decoration: none;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
`;

export const Center = props => (
  <div style={{ textAlign: 'center', display: 'flex', flex: '1 1 auto' }}>
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: '1 1 auto',
      }}
    >
      <span>{props.children}</span>
    </div>
  </div>
);

export const HoverTransition = styled.div`
  &:hover {
    transform: translateY(5px);
  }
`;

export const LoadingBar = keyframes`
  0% { width: 0%; }
  90% { width: 90%; }
  100% { width: 100%; }
`;

export const FadeInOut = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.25; }
  100% { opacity: 1; }
`;

export const Rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
`;

export const Color = keyframes`
  100%, 0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%, 90% {
    stroke: #ffa700;
  }
`;