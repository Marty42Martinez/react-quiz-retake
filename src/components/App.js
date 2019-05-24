import React from 'react';
import Meme from '../containers/Meme';
import styles from './App.css';

export default function App() {

  return (
    <>
      <header className={styles.Header}>
        <h1>Hello Developer</h1>
        <h2>Lettuce make some spicy Memes</h2>
      </header>
      <Meme />
    </>
  );
}
