import React, { Component } from "react";

class Player extends Component {
  state = {
    playerName: '"Player"',
    playerPower: 0,
    playerDes: 1,
    playerHumInt: 2
  };
  render() {
    return (
      <div className="playerBox">
        <p className="playerName"> {this.state.playerName}</p>
        <p className="playerStats">Power: {this.state.playerPower}</p>
        <p className="playerStats">Decisionmaking: {this.state.playerDes}</p>
        <p className="playerStats">Interactivity: {this.state.playerHumInt}</p>
      </div>
    );
  }
}

export default Player;
