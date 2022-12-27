import React, { Component } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import  full from "../assest/full.jpg"


export default class HeaderComponent extends Component {
  render() {
          
    return (
      <div>

        <div className='col s12 m6' style={{backgroundImage:`url(${full})`, width: "100vw"}}>
                
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <br/>
                
                </div>
                <h1 className="header center orange-text">Landing Page By Group 18</h1>
                <div className="row center">
                <h5 className="header col s12 bold white-text">As defined by Unbounce, “a landing page is a standalone web page, created specifically for the purposes of a marketing or advertising campaign.” Unbounce also mentions landing pages are designed with a single objective in mind, known as a Call to Action or CTA</h5>
            </div>
            <div className="row center">
                <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a>
            </div>
            <br/>

        </div>
        </div>
      </div>
    )
  }
}
