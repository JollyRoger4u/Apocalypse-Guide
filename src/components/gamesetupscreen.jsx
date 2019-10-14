import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { Player } from "./player";

class GameSetupScreen extends Component{
    
    render(){
      return(
        <div className="eventBox">
          <h2>{this.props.data.id + " " + this.props.data.eventTitle}</h2>
          <p>{this.props.data.eventText}</p>
          <div className="responseBox">{eventResponse(this.props.data.response)}</div>
        </div>
      )
  }}

  const statChanger = (props) =>{
      console.log("preprops " + props.gameEffect)
    if (props.gameEffect){
        
        return <Player value="1"/>
    }
  }
  export{GameSetupScreen};

  function eventResponse(props) {
    const uniqueResp = props.map(response => (
      <button
        key={response.rid}
        onClick={() => {
          statChanger(response);
        }}
        data-tip={response.hoverText}
      >
        <ReactTooltip />
        {response.rid + " - " + response.rbutton}
      </button>
    ));
    return uniqueResp;
  }
  /*let clickHandler = (props) => {
      
    console.log("clickhandler: " + props.rid + " " + props.hoverText);
  }*/