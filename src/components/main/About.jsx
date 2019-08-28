import React from 'react'
import headshot from '../../assets/profile/headshot.jpg'
import git from '../../assets/profile/git.png'
import javascript from '../../assets/profile/javascript.png'
import postgresql from '../../assets/profile/postgresql.png'
import node from '../../assets/profile/node.png'
import slack from '../../assets/profile/slack.png'
import photoshop from '../../assets/profile/photoshop.png'
import html from '../../assets/profile/html.png'
import express from '../../assets/profile/express.png'
import amazon from '../../assets/profile/amazon.png'
import rails from '../../assets/profile/rails.png'
import finalcut from '../../assets/profile/finalcut.png'
import css from '../../assets/profile/css.png'
import github from '../../assets/profile/github.png'
import npm from '../../assets/profile/npm.png'
import react from '../../assets/profile/react.png'
import ruby from '../../assets/profile/ruby.png'


export default (props) => {
  return (
    <div id='about'>
      <div id='about-container-outer-div'>
        <div id='about-container'>
          <img id='about-pic' src={headshot} alt='Profile Picture' />
          <p id='about-text'>I am a creative and analytical Software Engineer with a background in technical solutions, digital marketing and media. I seek the opportunity to be both a self-starter and collaborative team-player at a data-driven organization that constantly seeks to improve.</p>
        </div>
      </div>
      <div id='skills-container'> 
            <img className='img-skill' title='Git' src={git} alt='Git'/> 
            <img className='img-skill' title='JavaScript' src={javascript} alt='JavaScript'/>
            <img className='img-skill' title='PostgreSQL' src={postgresql} a lt='PostgreSQL'/>
            <img className='img-skill' title='Node' src={node} alt='Node'/> 
            <img className='img-skill' title='Slack' src={slack} alt='Sla ck'/>
            <img className='img-skill' title='Photoshop' src={photoshop} alt='Photoshop' />
            <img className='img-skill' title='HTML' src={html} alt='HTML'/> 
            <img className='img-skill' title='Express.JS' src={express} alt='Express.JS'/> 
            <img className='img-skill' title='Amazon Web Services' src={amazon} alt='Amazon Web Ser vices'/>
            <img className='img-skill' title='Ruby On Rails' src={rails} alt='Ruby On Rails'/>
            <img className='img-skill' title='Final Cut Pro X' src={finalcut} a lt='Final Cut Pro X'/>
            <img className='img-skill' title='CSS' src={css} alt='CSS' />
            <img className='img-skill' title='GitHub' src={github} alt='GitHub'/> 
            <img className='img-skill' title='NPM' src={npm} alt='NPM'/> 
        <img className='img-skill' title='React.JS' src={react} alt='React.JS'/>
        <img className='img-skill' title='Ruby' src={ruby} alt='Ruby'/>
      </div>
    </div>
  );
}