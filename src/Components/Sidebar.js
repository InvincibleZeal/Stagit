import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  constructor (props) {
    super(props);    
    this.state = { li: ['user', 'repos', 'gists', 'followers']};
  }

  render() {
    let { match } = this.props;
    return (
      <div className="Sidebar">
        <ul className="sidebar-nav">
          <Link to={match.url} >
            <li className="sidebar-item active" onClick={this.liItemClick}>
              <img className="sidebar-item-img" src="/images/octoface.svg" alt=""/>
            </li>
          </Link>
          <Link to={match.url + "/repos"} >
          <li className="sidebar-item" onClick={this.liItemClick}>
              <img className="sidebar-item-img" src="/images/sheet.svg" alt=""/>
          </li>
          </Link>
          <Link to={match.url + "/gists"} >
            <li className="sidebar-item" onClick={this.liItemClick}>
              <img className="sidebar-item-img" src="/images/browser.svg" alt=""/>
            </li>
          </Link>
          <Link to={match.url + "/issues"} >
            <li className="sidebar-item" onClick={this.liItemClick}>
              <img className="sidebar-item-img" src="/images/warning2.svg" alt=""/>
            </li>
          </Link>
          <Link to={match.url + "/contributions"} >
            <li className="sidebar-item" onClick={this.liItemClick}>
              <img className="sidebar-item-img" src="/images/cloud.svg" alt=""/>
            </li>
          </Link>
        </ul>
      </div>
    );
  }

  liItemClick = (e) => {
    let li = document.querySelectorAll('.sidebar-item');
    li.forEach(item => item.classList.remove("active"));
    let target;
    if(e.target.classList[0] === "sidebar-item") {
      target = e.target;
    } else {
      target = e.target.parentElement;
    }
    target.classList.add("active");
  }
}

export default Sidebar;