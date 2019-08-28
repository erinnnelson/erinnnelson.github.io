import React from 'react'

export default (props) => {
  return (
      < div id = { props.cssId } className = 'project-cards' >
        <div className='project-card-overlays'>
          <p className='project-card-titles'>{props.title}</p>
          <p className='project-card-descrips'>{props.descrip}</p>
          <p className='project-card-tools'>{props.tools}</p>
        </div>
    </div>
  );
}