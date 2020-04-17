import React, { Component } from 'react';

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reposList: [],
      detailed: {}
    };
  }
  
  render() {
    let { detailed } = this.state;
    let { reposList } = this.state;
    console.log(reposList);
    let repos;
    if(reposList.length !== 0) {
      repos = reposList.map((repo, index) => {
        return (
          <li className="repos-item" id={"repo-" + index} repo={repo} key={repo.id}
            onClick={this.repoForward}>
            <p>
              <span className="repos-name">{repo.name}</span>
              <span className="repos-created">{"Created: " + this.parseDate(repo.created_at)}</span>
            </p>
            <div className="repos-forward">
              <img src="/images/arrow-right.svg" alt=""/>
            </div>
          </li>
        )
      })
    }

    return (
      <div className="Repos">
        <div className="repos-container">
          <div className="repos-slider">
            <div className="repos-main">
              <h1 className="repos-heading"><span>Repositories</span></h1>
              <ul className="repos-list neutral-list">
                {repos}
              </ul>
            </div>
            <div className="repo-detail">
              <h1 className="repo-name">
                <span className="repo-backward" onClick={this.repoBackward}><img src="/images/arrow-right1.svg" alt=""/></span>
                <span className="repo-name-heading">{detailed.name}</span>
              </h1>
              <ul className="repo-props neutral-list">
                <li className="repo-item">
                  <p>
                    <span>Created: </span>
                    <span>{this.parseDate(detailed.created_at)}</span>
                  </p>
                </li>
                <li className="repo-item">
                  <p>
                    <span>Created: </span>
                    <span>{this.parseDate(detailed.created_at)}</span>
                  </p>
                </li>
                <li className="repo-item">
                  <p>
                    <span>Created: </span>
                    <span>{this.parseDate(detailed.created_at)}</span>
                  </p>
                </li>
                <li className="repo-item">
                  <p>
                    <span>Created: </span>
                    <span>{this.parseDate(detailed.created_at)}</span>
                  </p>
                </li>
                <li className="repo-item">
                  <p>
                    <span>Created: </span>
                    <span>{this.parseDate(detailed.created_at)}</span>
                  </p>
                </li>
                <li className="repo-item">
                  <p>
                    <span>Created: </span>
                    <span>{this.parseDate(detailed.created_at)}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  repoBackward = (e) => {
    document.getElementsByClassName('repos-slider')[0].classList.remove('slide');
    this.setState({detailed: {}})
  }

  repoForward = (e) => {
    let target = e.target.closest('.repos-item').id.slice(5);
    document.getElementsByClassName('repos-slider')[0].classList.add('slide');
    this.setState({detailed: this.state.reposList[target]});
  }

  componentDidMount() {
    let { user } = this.props;
    
    fetch(user.repos_url).then(res => res.json()).then((reposList) => {
      this.setState({reposList});
    }); 
  }

  parseDate = (date) => {
    let newDate = new Date(Date.parse(date))
    return newDate.toString().slice(4,-40);
  }
}

export default Repos;