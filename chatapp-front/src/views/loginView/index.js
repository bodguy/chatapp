import React from 'react';
import Icon from '@/icons';
import { LoginWrapper, GoogleLoginButton, Footer, FooterEl } from './style';

const LoginView = () => (
    <LoginWrapper>
          <div
            style={{
              fontWeight: '700',
              fontSize: '40px',
              textAlign: 'center',
              padding: '20px 0',
            }}
          >
          Sign Up
          </div>
          <GoogleLoginButton onClick={() => {
            window.location.href = `${SERVER_URL}/auth/google${afterAuthRedirectPath}`;
          }}
          >
            <Icon
              glyph="google"
              size={14}
            />
            <span style={{
              color: 'rgb(235, 87, 87)',
              fontSize: '14px',
              lineHeight: '1',
            }}
            >
            Sign up with Google
            </span>
          </GoogleLoginButton>

          <Footer>
            <div
              style={{
                padding: '40px 0 64px 0',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              <FooterEl>Links</FooterEl>
              <FooterEl>Product</FooterEl>
              <FooterEl>Company</FooterEl>
              <FooterEl>Contact</FooterEl>
            </div>
          </Footer>
    </LoginWrapper>
);

export default LoginView;