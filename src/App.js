import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Loadable from 'react-loadable';

import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Support from "./Components/Support";
import User from "./Components/User";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      validUser: false,
    };
  }

  render() {
    return (
      <BrowserRouter basename="/stagit">
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home getUser={this.handleGetUser.bind(this)} />}
            />

            <Route
              path="/user/:user"
              render={(object) => (
                <User
                  {...this.state}
                  object={object}
                  getUser={this.handleGetUser.bind(this)}
                />
              )}
            />

            <Route exact path="/about" component={About} />

            <Route exact path="/support" component={Support} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  handleGetUser = (user) => {
    this.setState({
      validUser: true,
      user,
    });
  };
}

export default App;
