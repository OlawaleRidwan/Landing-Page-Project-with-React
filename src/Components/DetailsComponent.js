import React, { Component } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import cardOptions from "./cards"
export default class DetailsComponent extends Component {
  render() {
    return (
      <div>

        <h1 className="header center Orange-text">Browse Through Our Courses</h1>
        <div className="row">
            <div className="col s12 m7" style={{width: "100vw", display: "flex", justifyContent: "space-around"}}>
            {cardOptions.map((card)=>{
                return    (<div style={{width: "25rem"}} className="card">
                    <div className="card-image ">
                        <img src={card.image}/>
                        <span className="card-title">{card.title}</span>
                    </div>
                    <div className="card-content">
                        <p>{card.description}</p>
                    </div>
                    <div className="card-action">
                    <a href="#">Click here to read more</a>
                    </div>
                </div>)
                })}
            </div>
        </div>
     </div>
    )
  }
}
