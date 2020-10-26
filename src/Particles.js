import React from 'react'
import Particles from 'react-particles-js'
import './Particles.css'

function ParticlesJs() {
    return (
        
             <div className='particles'>
      <Particles
	  className='particles-div'
    params={{
	    "particles": {
	        "number": {
	            "value": 70, //bubble total count
	            "density": {
	                "enable": true, //create small area with false
	                "value_area": 50 //area cover by bubble with amount of bubble
	            }
	        },
	        "line_linked": {
	            "enable": false //true create lines
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out" //out=allow slow out and come or in =creates buuble on off 
	        },
	        "shape": {
	            "type": [
	                "image", //text image same result
	                "circle"
	            ],
	            "image": [ //height width not fact
	                {
	                    "src": "",
	                    "height": 5,
                        "width": 5
	                },
	                {
	                    "src": "",
	                    "height": 5,
	                    "width": 5
	                },
	                {
	                    "src": "",
	                    "height": 5,
	                    "width": 5
	                }
	            ]
	        },
	        "color": {
	            "value": "#fff"
	        },
	        "size": {
	            "value": 4,
	            "random": true,
	            "anim": {
	                "enable": true,
	                "speed": 2,  //speed aniation move
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": true
	}} />
        </div>
    )
}

export default ParticlesJs
