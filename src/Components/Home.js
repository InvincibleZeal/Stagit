import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { userWarning: false, redirect: false, user: {} };
  }

  render() {
    const { redirect, user } = this.state;
    if (redirect) {
      return <Redirect to={"/user/" + user.login} />;
    }
    return (
      <div className="Home">
        <form className="form-user" onSubmit={this.formSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="input-username"
            className="form-input-username"
            placeholder="e.g. octokit"
            onChange={this.inputChange}
          />
          <input
            type="submit"
            id="button"
            className="form-submit-user"
            value="See Stats"
          />
          {this.state.userWarning && (
            <p className="form-warning">Username doesn't exist.</p>
          )}
        </form>
      </div>
    );
  }

  formSubmit = (e) => {
    e.preventDefault();
    let inputUser = document.getElementById("input-username");
    let url = "https://api.github.com/users/" + inputUser.value;
    this.fetchUser(url);
  };

  fetchUser = (url) => {
    fetch(url)
      .then((res) => {
        if (res.status === 404) {
          this.setState({ userWarning: true });
          console.error(Error("NotFoundError: Username doesn't exist"));
          return false;
        } else {
          return res.json();
        }
      })
      .then((user) => {
        if (user) {
          this.props.getUser(user);
          this.setState({ redirect: true, user });
        }
      })
      .catch((error) => console.log(error));
  };

  inputChange = () => {
    this.setState({ userWarning: false });
  };
}

export default Home;
