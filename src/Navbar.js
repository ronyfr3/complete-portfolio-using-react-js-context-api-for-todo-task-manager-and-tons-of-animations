import React,{useState} from 'react'
import {FaBars} from 'react-icons/fa'
import DarkMood from './DarkMood'
import './Navbar.css'

function Navbar() {
    const [show,setShow] = useState(false)
    const ClickedShow = () =>{
        setShow(!show)
    }
    return (
        // header sticky korar jonno must component ta k onno div dye wrap kora jabe na but fragment dye kora jbe
       <>
            <div className='wrapper'>
                    <div className='navLinks'>
                        <ul>
                            <li className='active'>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>ToDO List</li>
                            <li>Contact</li>
                        </ul>
                    </div>    
           <DarkMood/>
           </div>
           <div className='bars-icon'>
                 <FaBars onClick={ClickedShow}/>
            </div>
        {
                    show && (
                        <div className='menu'>
                            <ul className='dropUl'>
                                <li className='activeMenu'>Home</li>
                                <li>About</li>
                                <li>Projects</li>
                                <li>ToDo List</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    )
                }
       </>
    )
}

export default Navbar
