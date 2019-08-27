import React from 'react'

export default (props) => {
  return (
    <nav>
      <p id='hero-text'>Erinn Nelson</p>
      <div id='nav-buttons-container'>
        <p id='nav-button-about' className='nav-buttons'>About</p>
        <a id='nav-button-linkedin' className='nav-buttons' href='https://www.linkedin.com/in/erinnnelson/' target='_blank'>LinkedIn</a>
        <a id='nav-button-github' className='nav-buttons' href='https://github.com/erinnnelson' target='_blank'>GitHub</a>
      </div>
    </nav>
  );
}