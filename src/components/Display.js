import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css';

function Display({ headerText, footerText, image }) {
  return (
    <section className={styles.Display}>
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
