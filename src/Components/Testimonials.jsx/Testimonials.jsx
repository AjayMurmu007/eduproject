import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
       if(tx > -50) {
            tx -= 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0) {
            tx += 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`
    }



  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt='' />
                        <div>
                            <h3>Jackson</h3>
                            <span>edicom, USA</span>
                        </div>
                    </div>
                    <p>Social ills and economic backwardness are the consequences of lack of education. Lack of women’s empowerment, caste-ism, alcohol and drug abuse, violence and intolerance  .</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt='' />
                        <div>
                            <h3>Kingson</h3>
                            <span>Sona, Canada</span>
                        </div>
                    </div>
                    <p>Education may be imparted through the formal education system. Alongside, there also runs the informal system. The formal system is made available through schools.</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt='' />
                        <div>
                            <h3>Jackson</h3>
                            <span>Australia, USA</span>
                        </div>
                    </div>
                    <p>Education can be categorized in various ways, including formal (schools, colleges), informal (learning from life experiences), non-formal (community education), and special education .</p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt='' />
                        <div>
                            <h3>Carlo</h3>
                            <span>Educat, USA</span>
                        </div>
                    </div>
                    <p>Social ills and economic backwardness are the consequences of lack of education. Lack of women’s empowerment, caste-ism, alcohol and drug abuse, violence and intolerance as also incidents .</p>
                </div>
            </li>

           
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
