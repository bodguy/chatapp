import styled from 'styled-components';

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

export const GoogleLoginButton = styled.div`
    cursor: pointer;
    width: 100%;
    height: 36px;
    min-height: 36px;
    border-radius: 3px;
    color: rgb(235, 87, 87);
    font-size: 14px;
    padding-left: 12px;
    padding-right: 12px;
    background: rgba(235, 87, 87, 0.06);
    transition: background 120ms ease-in 0s;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px,
    rgba(235, 87, 87, 0.3) 0px 0px 0px 1px inset;
    &:hover {
        background: rgba(235, 87, 87, 0.16);
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 0 0 auto;
    width: 100%;
    border-top: 1px solid rgb(245, 239, 228);
    margin-top: 48px;
`;

export const FooterEl = styled.div`
    font-weight: 700;
    margin: 0 40px;
`;