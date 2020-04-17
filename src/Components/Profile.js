import React, { Component } from 'react';

class Profile extends Component {
  
  render() {
    let { user } = this.props;
    return(
      <div className="Profile">
        <div className="profile-main">
          {user.login && <img src={user.avatar_url} alt="" className="pm-img"/>}
          <div className="pm-user">
            <h1 className="pm-name">
              {( user.login && user.name) ? user.name : (user.login ? "No Username" : "")}
            </h1>
            <h3 className="pm-username">
              <a href={user.html_url}>
                {user.login ? "@" + user.login : ""}
              </a>
            </h3>
          </div>
        </div>
        <div className="profile-info">
          {
            user.bio && (
              <div className="pub">
                <p className="pub-bio">"{user.bio}"</p>
              </div>
            )
          }
          { 
            user.email && (
              <div className="pue">
                <img src="/images/email.svg" alt="" className="pue-img" />
                <p className="pue-email">{user.email}</p>
              </div>
            )
          }
          {
            user.location && (
              <div className="pul">
                <img src="/images/location.svg" alt="" className="pul-img"/>
                <p className="pul-location">{user.location}</p>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Profile;