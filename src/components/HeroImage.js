import './HeroImageStyles.css';
import Typed from "react-typed"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom"
import MyPhoto from "../assets/my-photo.jpg"

const HeroImage = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img'
        src={IntroImg}/>
      </div>
      <div className='contenet'>
        <p>Hi, My Name is Dejen</p>
        <h1>Full stack Developer</h1>
        <Typed
              className ="typed-text"
              strings = {["python", "java script", "Html", "css" ]}
              typespeed = {40}
              backspeed = {50}
              loop
            />
            
        <div className='my-button'>
            <Link to='/project' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
        <div className='image'>
        <img className='my-img'
        src={MyPhoto}/>
        </div>

      </div>
    </div>
  )
}

export default HeroImage
