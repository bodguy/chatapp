import React from 'react';
import {
  PreBlock,
} from './style';

const CodeBlock = ({ ...props }) => {
  return (
    <PreBlock>
      {props.children}
    </PreBlock>
  );
};

export default CodeBlock;