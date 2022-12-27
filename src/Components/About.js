import React from 'react'
import "materialize-css/dist/css/materialize.min.css";
import about from '../assest/about.png';


export default function About() {


  return (

    <div>
        <h1 className="header center orange-text">About Us</h1>
        
        <div style={{width: "100vw", display: "flex", justifyContent: "space-around"}}>
        <div><img className="responsive-img" src={about} style={{width:"50vw"}}/></div>
        <h5 className='para bold'>At Hi-Mark Academy, we are driven to equip and empower individuals with the necessary skills to be part of today’s workforce. We've seen time and time again how the seemingly little act of teaching can be a catalyst for personal growth and change. We want to foster and spread the type of creative discovery that leads to more expression, learning,  application and opportunities.<p>
        We want to empower the substantial workforce the opportunities to work and earn globally doing remote work.</p>
        <p>We provide online educational contents and coursework that are largely driven by technology.  With our powerful and flexible digital education platform, even the busiest learners can prepare themselves to take on the courses we offer.</p>
        <p>Our dedicated instructors and unique learning approach provides a high level of engagement with our students- from the moment they click on the website to the point when they complete there course and are awarded a certificate. We are dedicated to providing the highest quality of learning to as many individuals as we can reach</p></h5>
        
        </div>
      </div>
            
        
    
  )
}
