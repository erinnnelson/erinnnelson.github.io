import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export default (props) => {
  return (
    <nav>
      <p id='hero-text'>Erinn Nelson</p>
      <div id='nav-buttons-container'>
        <Link smooth to='/#about' id='nav-button-about' className='nav-buttons'>About</Link>
        <a id='nav-button-linkedin' className='nav-buttons' href='https://www.linkedin.com/in/erinnnelson/' target='_blank'>LinkedIn</a>
        <a id='nav-button-github' className='nav-buttons' href='https://github.com/erinnnelson' target='_blank'>GitHub</a>
      </div>
    </nav>
  );
}