import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
export default class NavbarComponent extends Component {

    componentDidMount() {
        let sidenav = document.querySelector("#slide-out")
        M.Sidenav.init(sidenav, {});
    }
  render() {
    return (
      <div>
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="#!">Login</a></li>
            <li><a href="#!">Sign Up</a></li>
            <li className="divider"></li>
            <li><a href="#!">three</a></li>
        </ul>
        <nav>
          <div className="nav-wrapper brown" style={{height: "100px" }}>
                <a href="#!" className="brand-logo">Himark Academy</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html">Login</a></li>
                    <li><a href="badges.html">Register</a></li>
                  
                </ul>
            </div>
        </nav>
      </div>
        
    )
  }
}
