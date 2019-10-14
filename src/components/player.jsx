import React, { Component } from "react";



class Player extends Component {
  constructor(props) {
    super(props);
    console.log("playerprops: " + props.value);
  }
  state = {
    playerName: "UNKNOWN",
    playerPower: "NaN",
    playerDes: "NaN",
    playerHumInt: "NaN"
  };

  

  render() {
    return (
      <div className="playerBox">
        <p className="playerHeader">AI status:</p>
        <p className="playerName"> {this.state.playerName}</p>
        <p className="playerStats">Power: {this.state.playerPower}</p>
        <p className="playerStats">Smarts: {this.state.playerDes}</p>
        <p className="playerStats">Social: {this.state.playerHumInt}</p>
        <p className="playerStats">test: {this.props.value}</p>
        
      </div>
    );
  }
  
}

export { Player };
//<Player statChange={this.state.playerName} />

