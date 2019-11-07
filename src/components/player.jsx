import React, { Component } from "react";



class Player extends Component {



  render() {
    
  
    return (
      <div className="playerBox">
        <p className="playerHeader">AI status: {this.props.playerState.status}</p>
        <p className="playerName"> {this.props.playerState.playerName}</p>
        <p className="playerStats">Power: {this.props.playerState.playerPower}</p>
        <p className="playerStats">Smarts: {this.props.playerState.playerDes}</p>
        <p className="playerStats">Social: {this.props.playerState.playerHumInt}</p>
        <p className="playerStats">test: {this.props.playerState.test}</p>
        
      </div>
    );
  }
  
}

export { Player };

