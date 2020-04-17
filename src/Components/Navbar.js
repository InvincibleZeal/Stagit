import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {  
    return (
      <div className="NavBar">
        <div className="nav-container">
          <NavBrand />
          <NavPanel />
        </div>
      </div>
    );
  }
}

class NavBrand extends Component {
  render() {
    return (
      <div className="NavBrand">
        <img className="nav-brand-img" src="/images/triquetra-light.svg" alt="" />
        <Link className="neutral-link link-hover" to="/">          
          <span className="nav-brandname">
            Stagit
          </span>
        </Link>
      </div>
    );
  }
}

class NavPanel extends Component {
  render() {
    return (
      <div className="NavPanel">      
        <ul className="nav-list">
          <li className="nav-list-item"><Link className="neutral-link link-hover" to="/about">About</Link></li>
          <li className="nav-list-item"><Link className="neutral-link link-hover" to="/support">Support</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;