import React, { useState } from 'react';
import Icon from '@/icons';
import SnackBar from '@/snackbar';
import {
  SearchBarContainer,
  SearchForm,
  IconHover,
  Input,
  PlainButton,
} from './style'

const SearchBox = () => {
  const [message, setMessage] = useState(null);

  const onOpenSnakbar = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setMessage('Failed to retrieve your personal access token');
    }
  };

  return (
    <SearchBarContainer>
      <SearchForm method="GET">
        <PlainButton type="button" style={{ alignSelf: 'center', flex: '1' }}>
          <IconHover>
            <Icon glyph="search" size={32} />
          </IconHover>
        </PlainButton>
        <Input type="text" placeholder="검색" onKeyDown={onOpenSnakbar} />
      </SearchForm>

      {/* <SnackBar message={message} onClose={() => setMessage('')} /> */}
    </SearchBarContainer>
  );
};

export default SearchBox;