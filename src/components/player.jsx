import React, { Component } from "react";



class Player extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this);
    return (
      <div className="playerBox">
        <p className="playerHeader">AI status: {this.props.data.status}</p>
        <p className="playerName"> {this.props.data.playerName}</p>
        <p className="playerStats">Power: {this.props.data.playerPower}</p>
        <p className="playerStats">Smarts: {this.props.data.playerDes}</p>
        <p className="playerStats">Social: {this.props.data.playerHumInt}</p>
        <p className="playerStats">test: {this.props.test}</p>
        
      </div>
    );
  }
  
}

export { Player };
//<Player statChange={this.state.playerName} />

