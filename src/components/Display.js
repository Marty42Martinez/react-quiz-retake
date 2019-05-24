import React from 'react';
import PropTypes from 'prop-types';

function Display({ headerText, footerText, image }) {
  const style = { };
  return (
    <section>
      <p>{headerText}</p>
      <img src={image} />
      <p>{footerText}</p>
    </section>
  );
}

Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Display;
