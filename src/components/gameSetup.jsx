/*import React, { Component } from "react";
import {GameSetupScreen} from "./Gamesetupscreen"
import {Player} from "./Player"
import {gameSetupData} from "../Data/GameSetup"
//import ReactDOM from "react-dom";



let counter = 1;

class GameSetup extends Component{
  state = {
    setupEvent: gameSetupData[counter],

  };
render(){

  return (
    <React.Fragment>
    <GameSetupScreen data={this.state.setupEvent}/>
    <Player data={this.state} test="5"/>
    </React.Fragment>
)}
}
export {GameSetup};

//ReactDOM.render(<GameSetup />, document.getElementById("mainContentWrapper"));
/*

class SetupScreen extends Component{
  render(){
  let gameSetupScreen = this.state.setupEvent.map(event => 
    <div key={event.id} className="eventBox">
    <h2>{event.id + " " + event.eventTitle}</h2>
    <p>{event.eventText}</p>
  </div>);
  return <React.Fragment>{gameSetupScreen}</React.Fragment>
}
//<div className="responseBox">{eventResponse(event.response)}</div>
export { GameSetup };*/



