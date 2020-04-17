import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import Contributions from './Contributions';
import Details from './Details';
import Issues from './Issues';
import Gists from './Gists';
import Profile from './Profile';
import Repos from './Repos';
import Sidebar from './Sidebar';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {redirect: false};
  }

  render() {

    let { redirect } = this.state;
    if(redirect) {
      return <Redirect to="/" />
    }

    let { match } = this.props.object;
    return (
      <div className="User">
        <Sidebar {...this.props.object}/>
        <Profile {...this.props} />
        <Switch>
          <Route exact path={match.path + "/repos"} 
            render={() => (<Repos {...this.props} />)} 
          />
          <Route exact path={match.path + "/gists"} 
            render={() => (<Gists {...this.props} />)}
          />
          <Route exact path={match.path + "/issues"} component={Issues} />
          <Route exact path={match.path + "/contributions"} component={Contributions} />
          <Route render={(object) => (<Details {...this.props} />)} />
        </Switch>
      </div>
    );
  }
  
  componentDidMount() {
    if(!this.props.user.login) {
      this.setState({redirect: true});
    }

    // let { match } = this.props.object;
    // console.log(this.props);
    // if(!this.props.validUser) {
    //   fetch("https://api.github.com/users/" + match.params.user)
    //   .then(res => {
    //     if(res.status === 404) {
    //       console.error(Error("NotFoundError": "Username doesn't exist"));
    //       return false;
    //     } else {
    //       return res.json();
    //     }
    //   }).then(user => {
    //     if(user) {
    //       this.props.getUser(user);
    //     } else {
    //       this.setState({redirect: true});
    //     }
    //   })
    // .catch((error) => console.log(error));
    // }
  }
}

export default User;