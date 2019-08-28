import React from 'react'
import ProjectCard from './ProjectCard'

export default (props) => {
  return (
      <div id='project-cards-container'>
        <a
          className='project-card-containers'
          href='http://qwp.surge.sh/'
          target='_blank'>
          <ProjectCard
            cssId='project-card-qwickpoll'
            title='QWICKPOLL'
            descrip='Custom survey creator with full user authentication'
            tools='React.JS, Ruby on Rails'
          />
        </a>
        <a
          className='project-card-containers'
          href='http://tackle.surge.sh/'
          target='_blank'>
          <ProjectCard
            cssId='project-card-tackle'
            title='TACKLE;'
            descrip='Online forum for topics related to coding'
            tools='React.JS, Express.JS, PostGRESQL'
          />
        </a>
        <a
          className='project-card-containers'
          href='http://beatmyrun.surge.sh/'
          target='_blank'>
          <ProjectCard
            cssId='project-card-beatrun'
            title='BEAT MY RUN'
            descrip='Exercise playlist builder based on running stride'
            tools='React.JS, GetSongAPI'
          />
        </a>
        <a
          className='project-card-containers'
          href='http://cardmatch.surge.sh/'
          target='_blank'>
          <ProjectCard
            cssId='project-card-match'
            title='MATCH EM UP'
            descrip='Interactive card-matching memory game'
            tools='HTML, CSS, JavaScript'
          />
        </a>
        <a
          className='project-card-containers'
          href='http://cowabunga.surge.sh/'
          target='_blank'>
          <ProjectCard
            cssId='project-card-bennys'
            title="BENNY'S"
            descrip='Collaboratively created website for local business'
            tools='React.JS, AGILE'
          />
        </a>
      </div>
  );
}