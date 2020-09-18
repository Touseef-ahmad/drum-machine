import React from 'react';
import { propTypes } from './prop-types';
import './styles.css';

export const Pad = ({ char, handleClick }) => (
  <div className='col-md-4 col-sm-4 col-4'>
    <button
      type='button'
      id={`${char}-button`}
      onClick={() => handleClick(char)}
      className='drum-pad btn-block'
    >
      <p>{char}</p>
      <audio
        className='clip'
        id={char}
        controls
        src='https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/34[kb]brightclap.aif.mp3'
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </button>
  </div>
);

Pad.propTypes = propTypes;
