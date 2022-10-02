import { Component } from "react";
import logo1 from "../../images/logo.svg";
import "./nav.css"

class Nav extends Component{
    render(){
        return(
          <div>
           <nav className="navbar navbar-expand-lg navbar-white bg-white">
          <div className="container px-5">
          <img src={logo1} alt="logo" className="img" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link text-dark"  aria-current="page" href="#sec1">Home</a>
                    </li>
                        <li className="nav-item">
                          <a className="nav-link text-dark" aria-current="page" href="#sec2">Feature</a>
                        </li>  
                            <li className="nav-item">
                              <a className="nav-link text-dark" aria-current="page" href="#sec3">Overview</a>
                            </li>
                                <li className="nav-item">
                                  <a className="nav-link text-dark" aria-current="page" href="#sec6">Pricing</a>
                                 </li>  
                                 <li className="nav-item">
                                    <a className="nav-link text-dark" aria-current="page" href="#sec7">Team</a>
                                   </li>  
                                   <li className="nav-item">
                                    <a className="nav-link text-dark" aria-current="page" href="#sec11">Blog</a>
                                   </li>  
                                   
                                   <li className="nav-item">
                                    <a className="nav-link text-dark" aria-current="page" href="#footer">Contact</a>
                                   </li>  
                    </ul>
              </div>
                <button id="get" className="btn btm-sm text-white" >Get It Now</button>
                </div>
          </nav>
          </div>  
        )
    }
}
export default Nav