import React from 'react'
import ColorText from './ColorText'
import './Header.css'
import ParticlesJs from './Particles'

function Header() {
    
    return (
        <div className='main'>
                <div className='header'>
                    <ParticlesJs/>
                   <div>
                   <img 
                        src='Images/ronygithub.jfif' 
                        alt=''
                        className='overlayImage'
                    />
                   </div>
                    <ColorText className='colorText'/>
                </div>
                
          </div>
    )
}

export default Header
