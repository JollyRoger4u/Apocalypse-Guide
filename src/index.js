import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import MainMenu from "./components/mainMenu.jsx";
import Player from "./components/player.jsx";
//import {GameEventBox} from "./components/gameEvent.jsx";
const mainPageHeader = (
  <div>
    <h1>Guide to the Apocalypse</h1>
    <p>Written by Roger Pettersson</p>
  </div>
);

ReactDOM.render(mainPageHeader, document.getElementById("mainPageHeader"));
//ReactDOM.render(<GameEventBox />, document.getElementById("modalBox"));
ReactDOM.render(<MainMenu />, document.getElementById("mainMenu"));
ReactDOM.render(<Player />, document.getElementById("playerBox"));
