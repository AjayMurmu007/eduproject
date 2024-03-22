import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure better education for a better world.</h1>
        <p>It makes a person more stable and wise. One can improve their chance of getting job opportunities with the aid of their expertise and degree. It opens several opportunities in various fields for an individual. Education teaches a person to be self-sufficient.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt='' /></button>
      </div>
    </div>
  )
}

export default Hero
