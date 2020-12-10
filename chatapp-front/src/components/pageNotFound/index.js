import React from 'react';
import {
  PageNotFoundWrapper,
  BigTitle,
  SubTitle,
} from './style';

class PageNotFound extends React.Component {
  render() {
    return (
      <PageNotFoundWrapper>
        <BigTitle>404</BigTitle>
        <SubTitle>Page Not Found</SubTitle>
      </PageNotFoundWrapper>
    );
  }
}

export default PageNotFound;