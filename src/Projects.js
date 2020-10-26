import React from 'react'
import {ProjectsList} from './ProjectData'
import './Project.css'

function Projects() {
    return (
        <div className='projectsWrapper'>
            <div className='nameinfo'>
                <h2 className='about'>Project</h2>
                <div className='div-bottom'></div>
            </div>
           <div className='productBox'>
           {
            ProjectsList.map(({name,Price})=>{
                   return(
                       <div 
                       key={name}
                       className='listProducts'
                       >
                           <h3 className='prod'>{name}</h3>
                           <h3 className='prod1'>Price: ${Price}</h3>
                       </div>
                   )
               }) 
            }
           </div>
        </div>
    )
}

export default Projects
