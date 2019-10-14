import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import { EventDataHandler } from "./gameEvent";
import { GameSetup } from "./gameSetup"

class MainMenuRouter extends Component {
  state = {
    player: "default"
  };
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" exact component={LandingPageMenu} />
            <Route path="/NewGame" exact component={GameSetup} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}
class LandingPageMenu extends Component {
  render() {
    return (
      <div className="menuBox">
        <Link to="/NewGame" style={{ textDecoration: "none", width: 200 }}>
          <h4 className="menuItem">Start new game</h4>
        </Link>
        <Link to="/LoadGame" style={{ textDecoration: "none", width: 200 }}>
          <h4 className="menuItem">Load game</h4>
        </Link>
        <Link to="/About" style={{ textDecoration: "none", width: 200 }}>
          <h4 className="menuItem">About</h4>
        </Link>
      </div>
    );
  }
}

export default MainMenuRouter;
