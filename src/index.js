import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import MainMenuRouter from "./components/mainMenu.jsx";
//import GameMenu from "./components/mainMenu.jsx";
//import {GameEventBox} from "./components/gameEvent.jsx";
class MainPageHeader extends Component {
  render() {
    return (
      <div className="mainPageHeader">
        <h1>Guide to the Apocalypse</h1>
        <p>Written by Roger Pettersson</p>
      </div>
    );
  }
}
class LandingPage extends Component {
  render() {
    return (
      <div>
        <MainPageHeader />
        <MainMenuRouter />
      </div>
    );
  }
}
ReactDOM.render(<LandingPage />, document.getElementById("mainContentWrapper"));
//ReactDOM.render(LandingPage, document.getElementById("mainContentWrapper"));
//ReactDOM.render(mainPageHeader, document.getElementById("mainPageHeader"));
//ReactDOM.render(<GameEventBox />, document.getElementById("modalBox"));
//ReactDOM.render(<MainMenu />, document.getElementById("mainMenu"));
//ReactDOM.render(<Player />, document.getElementById("playerBox"));*/

/*Mainscreen for initial start of the game, keep simple and relatively clean.
HEADER
MENU
    START NEW GAME
    CONTINUE
    ABOUT (?)

FOOTER*/
