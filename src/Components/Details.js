import React, { Component } from 'react';

class Details extends Component {
  render() {
    let {user} = this.props;
    return (
      <div className="Details">
        <ul className="detail-list">
          <li className="detail-item">
            <div className="detail-item-name-box">
              <p className="detail-item-name">Repositories</p>
            </div>
            <div className="detail-item-count">
              <p className="detail-item-counter">{user.public_repos}</p>
            </div>
          </li>
          <li className="detail-item">
            <div className="detail-item-name-box">
              <p className="detail-item-name">Gists</p>
            </div>
            <div className="detail-item-count">
              <p className="detail-item-counter">{user.public_gists}</p>
            </div>
          </li>
          <li className="detail-item">
            <div className="detail-item-name-box">
              <p className="detail-item-name">Followers</p>
            </div>
            <div className="detail-item-count">
              <p className="detail-item-counter">{user.followers}</p>
            </div>
          </li>
          <li className="detail-item">
            <div className="detail-item-name-box">
              <p className="detail-item-name">Following</p>              
            </div>
            <div className="detail-item-count">
              <p className="detail-item-counter">{user.following}</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Details;