import React,{useState} from 'react'
import {FaArrowAltCircleUp} from 'react-icons/fa'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {CgCopyright} from 'react-icons/cg'
import './Footer.css'

function Footer() {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)

    

    return (
        <div className='footer'>
            <div className='arrowUp'>
               <FaArrowAltCircleUp className="scrollTop" onClick={scrollTop}/>
            </div>
            <div className='logo'>
                <AiOutlineFacebook className='logos'/>
                <AiFillLinkedin className='logos'/>
                <FaInstagram className='logos'/>
                <AiFillTwitterSquare className='logos'/>
            </div>
           <div className='footerInfo'>
             <h1 className='info'>Abdur Rakib Rony</h1>
             <CgCopyright className='copywrite'/>
             <p className='p'>2020</p>
           </div>
        </div>
    )
}

export default Footer
