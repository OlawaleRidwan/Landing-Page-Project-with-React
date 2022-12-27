import React from 'react'
import "materialize-css/dist/css/materialize.min.css";
import  off1 from "../assest/off1.png"
import  off2 from "../assest/off2.png"
import  off3 from "../assest/off3.png"


export default function IconComponent () {
  return (
    

    <div>
    <h1 className="header center orange-text">What we offer</h1>
    <div className="container" style={{width: "100vw", display: "flex", justifyContent: "space-around"}}>

        
        <div className="row">
            <div className="col s12 m6">
                <img className="responsive-img" src={off1}/>
                <h5 className='font'>Training</h5>
                <h6 className="para">
                    We offer top notch training that makes our students complete in the global market and can fit well into any orgnaisation with programming needs
                </h6>
            </div>
        </div>


        <div className="row">
            <div className="col s12 m6">
                <img className="responsive-img" src={off2}/>
                <h5 className='font'>Reinbursement</h5>
                <h6 className="para">
                    We offer top notch training that makes our students complete in the global market and can fit well into any orgnaisation with programming needs
                </h6>
            </div>
        </div>


        <div className="row">
            <div className="col s12 m6">
                <img className="responsive-img" src={off3}/>
                <h5 className='font'>Job Placement</h5>
                <h6 className="para">
                    We offer top notch training that makes our students complete in the global market and can fit well into any orgnaisation with programming needs
                </h6>
            </div>
        </div>

        </div>
    </div>
  )
}
