import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, name, handleChange }) {
  return (
    <input name={name} type='text' value={text} onChange={handleChange} />
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
