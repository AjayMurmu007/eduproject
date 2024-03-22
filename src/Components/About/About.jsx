import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='' className='about-img' />
        <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true) }}/>
      </div>
      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>One who is educated possesses the knowledge and awareness to live life meaningfully in harmony with other humans and the world around. Through the role that education plays in the mental and intellectual advancement of individuals, it also helps in the physical, emotional and spiritual growth of the persons.</p>
        <p>Education is the backbone of a socially, economically and politically just and strong society. Through education social disparities and maladies can be wiped out to a great extent. Injustice against women, the poor, the minorities and the backward can be done away with if all children and youth are afforded education.</p>
        <p>Education helps to widen a person’s mental and intellectual capacity. Any process or activity that serves this purpose, therefore, is part of education. While there is a formal system of education, there is also an informal system of education.</p>
      </div>
    </div>
  )
}

export default About
