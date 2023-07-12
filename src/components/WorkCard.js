import './WorkCardStyles.css'

import React from 'react'
import Project1 from '../assets/project1.jpg'
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt="this is an image"/>
    <h2 className='project-title'>{props.title}</h2>
    <div className='project-detail'>
        <p>{props.text}</p>
        <div className='pro-btns'>
            <NavLink to ={props.view} className='btn'>View</NavLink>
            <NavLink to ="url.com" className='btn'>Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard;
