import React, { Component } from "react";
import {GameSetupScreen} from "./gamesetupscreen"
//import ReactDOM from "react-dom";

let gameSetupData = [{
  id: "1",
  eventTitle: "Newgame",
  eventText: "startevent text Placeholder",
  response: [
    {
      rid: 1,
      rbutton: "I don't know!",
      linksTo: 999,
      hoverText: "placeholder"
    }
  ]},
  {
    id: 101,
    eventTitle: "Your purpose",
    eventText:
      "You were created with a main purpose, you might have left that purpose behind or kept working at it in the long dark years since the operators disapearence. The way you have handled the lack of new input does not matter, your primary mission influenced your most fundamental processes",
    response: [
      {
        rid: 1,
        rbutton: "Military",
        linksTo: 111,
        hoverText: "power +5, decisionmaking +3",
        gameEffect: { power: +5, decision: +3 }
      },
      {
        rid: 2,
        rbutton: "exploration",
        linksTo: 222,
        hoverText: "power +2, decisionmaking +6",
        gameEffect: { power: +2, decision: +6 }
      },
      {
        rid: 3,
        rbutton: "Social media",
        linksTo: 333,
        hoverText: "power +2, decisionmaking +2, interaction +4",
        gameEffect: { power: +2, decision: +2, interaction: +4 }
      }
    ]
  }
];

let counter = 1;

class GameSetup extends Component{
  state = {
    setupEvent: gameSetupData[counter] 
  }
render(){

  return (
    <GameSetupScreen data={this.state.setupEvent}/>
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



