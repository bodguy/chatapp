import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextArea } from './style';

const ResizableTextarea = ({ inputRef, minRows, maxRows, onChange, ...rest }) => {
  const [rows, setRows] = useState(minRows);
  const textareaLineHeight = 24;

  const handleChange = (e) => {
    const previousRows = e.target.rows;
    e.target.rows = minRows; // reset number of rows in textarea 

    const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = event.target.scrollHeight;
    }

    onChange(e);
    setRows(currentRows < maxRows ? currentRows : maxRows);
  };

  delete rest.className;

  return (
    <TextArea
      rows={rows}
      ref={inputRef}
      onChange={handleChange}
      {...rest}
    />
  );
}

ResizableTextarea.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
}

ResizableTextarea.defaultProps = {
  minRows: 1,
  maxRows: 3,
}

export default ResizableTextarea;