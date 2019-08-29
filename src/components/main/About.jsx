import React from 'react'
import headshot from '../../assets/profile/headshot.jpg'
import git from '../../assets/profile/git.png'
import git_color from '../../assets/profile/git_color.png'
import javascript from '../../assets/profile/javascript.png'
import javascript_color from '../../assets/profile/javascript_color.png'
import postgresql from '../../assets/profile/postgresql.png'
import postgresql_color from '../../assets/profile/postgresql_color.png'
import node from '../../assets/profile/node.png'
import node_color from '../../assets/profile/node_color.png'
import slack from '../../assets/profile/slack.png'
import slack_color from '../../assets/profile/slack_color.png'
import photoshop from '../../assets/profile/photoshop.png'
import photoshop_color from '../../assets/profile/photoshop_color.png'
import html from '../../assets/profile/html.png'
import html_color from '../../assets/profile/html_color.png'
import express from '../../assets/profile/express.png'
import express_color from '../../assets/profile/express_color.png'
import amazon from '../../assets/profile/amazon.png'
import amazon_color from '../../assets/profile/amazon_color.png'
import rails from '../../assets/profile/rails.png'
import rails_color from '../../assets/profile/rails_color.png'
import finalcut from '../../assets/profile/finalcut.png'
import finalcut_color from '../../assets/profile/finalcut_color.png'
import css from '../../assets/profile/css.png'
import css_color from '../../assets/profile/css_color.png'
import github from '../../assets/profile/github.png'
import github_color from '../../assets/profile/github_color.png'
import npm from '../../assets/profile/npm.png'
import npm_color from '../../assets/profile/npm_color.png'
import react from '../../assets/profile/react.png'
import react_color from '../../assets/profile/react_color.png'
import ruby from '../../assets/profile/ruby.png'
import ruby_color from '../../assets/profile/ruby_color.png'


export default (props) => {
  return (
    <div id='about'>
      <div id='about-container-outer-div'>
        <div id='about-container'>
          <img id='about-pic' src={headshot} alt='Profile Picture' />
          <p id='about-text'>I am a creative and analytical Software Engineer with a background in technical solutions, digital marketing and media. I seek the opportunity to be both a self-starter and collaborative team-player at a data-driven organization that constantly seeks to improve.</p>
        </div>
      </div>
      <a href='mailto:iamerinnnelson@gmail.com' id='button-mail' title='iamerinnnelson@gmail.com' alt='Click to mail'></a>
      <div id='skills-container'>
        <div className='img-skill-containers'>
          <a href='https://git-scm.com/' target='_blank'>
            <img className='img-skills' src={git} />
            <img className='img-color-skills' src={git_color} title='Git' alt='Git' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://www.javascript.com/' target='_blank'>
            <img className='img-skills' src={javascript} />
            <img className='img-color-skills' src={javascript_color} title='Git' title='JavaScript' alt='JavaScript' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://www.postgresql.org/' target='_blank'>
            <img className='img-skills' src={postgresql} />
            <img className='img-color-skills' src={postgresql_color} title='PostgreSQL' alt='PostgreSQL' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://nodejs.org/en/' target='_blank'>
            <img className='img-skills' src={node} />
            <img className='img-color-skills' src={node_color} title='Node.JS' alt='Node.JS' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://slack.com/' target='_blank'>
            <img className='img-skills' src={slack} />
            <img className='img-color-skills' src={slack_color} title='Slack' alt='Slack' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://www.photoshop.com/' target='_blank'>
            <img className='img-skills' src={photoshop} />
            <img className='img-color-skills' src={photoshop_color} title='Photoshop' alt='Photoshop' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://www.w3.org/html/' target='_blank'>
            <img className='img-skills' src={html} />
            <img className='img-color-skills' src={html_color} title='HTML' alt='HTML' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://expressjs.com/' target='_blank'>
            <img className='img-skills' src={express} />
            <img className='img-color-skills' src={express_color} title='Express.JS' alt='Express.JS' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://aws.amazon.com/' target='_blank'>
            <img className='img-skills' src={amazon} />
            <img className='img-color-skills' src={amazon_color} title='Amazon Web Services' alt='Amazon Web Ser vices' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://rubyonrails.org/' target='_blank'>
            <img className='img-skills' src={rails} />
            <img className='img-color-skills' src={rails_color} title='Ruby On Rails' alt='Ruby On Rails' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://www.apple.com/final-cut-pro/' target='_blank'>
            <img className='img-skills' src={finalcut} />
            <img className='img-color-skills' src={finalcut_color} title='Final Cut Pro X' alt='Final Cut Pro X' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://www.w3.org/Style/CSS/Overview.en.html' target='_blank'>
            <img className='img-skills' src={css} />
            <img className='img-color-skills' src={css_color} title='CSS' alt='CSS' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://github.com/' target='_blank'>
            <img className='img-skills' src={github} />
            <img className='img-color-skills' src={github_color} title='GitHub' alt='GitHub' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://www.npmjs.com/' target='_blank'>
            <img className='img-skills' src={npm} />
            <img className='img-color-skills' src={npm_color} title='NPM' alt='NPM' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://reactjs.org/' target='_blank'>
            <img className='img-skills' src={react} />
            <img className='img-color-skills' src={react_color} title='React.JS' alt='React.JS' />
          </a>
        </div>
        <div className='img-skill-containers'>
          <a href='https://www.ruby-lang.org/en/' target='_blank'>
            <img className='img-skills' src={ruby} />
            <img className='img-color-skills' src={ruby_color} title='Ruby' alt='Ruby' />
          </a>
        </div>
      </div>
    </div>
  );
}