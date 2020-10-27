import React,{ useContext, useState } from 'react'
import { TaskListContext } from './Context'
import './Contact.css'

function Contact() {
    const {addUser} =useContext(TaskListContext)
   const [userinput,setUserinput]=useState('')
    const handleChange =(e)=>{
        setUserinput(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        //passing userinput value as props to the context.js in addUser function
        addUser(userinput)
        //setUserinput('') this clear the iput field
        setUserinput('')
    }
    return (
        <div className='form'>
            <h3 className='h3'>User Login</h3>
            <form 
            onSubmit={handleSubmit}
            >
                <input
                type='text'
                placeholder='Username'
                value={userinput}
                onChange={handleChange}
                required
                />
            <button onClick={()=>userinput ? alert('successFully Loged in'):''} type='submit' className='btn45'>Submit</button>
            </form>
        </div>
    )
}

export default Contact
