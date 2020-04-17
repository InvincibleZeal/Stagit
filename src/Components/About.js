import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="container-60">
          <h1 className="about-content">
            <embed className="about-img" src="./images/triquetra-grey.svg" type=""/>
            <span className="about-header">Stagit</span>
            is a skin, Github API is the soul.
          </h1>
          {/* <h3 className="about-wish">Thanks.</h3> */}
        </div>
      </div>
    );
  }
}

export default About;