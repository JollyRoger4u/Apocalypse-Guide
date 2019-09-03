import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { eventData } from "../rawdata/events";
import ReactTooltip from "react-tooltip";

class EventDataHandler extends Component {
  constructor() {
    super();

    this.state = {
      rawEventData: eventData,
      currentEvent: "xx",
      nextEvent: "xx"
    };
  }

  render() {
    console.log(this.state.rawEventData);
    const listEvents = this.state.rawEventData.map(event => (
      <div key={event.id} className="eventBox">
        <h2>{event.id + " " + event.eventTitle}</h2>
        <p>{event.eventText}</p>
        <div className="responseBox">{eventResponse(event.response)}</div>
      </div>
    ));

    return <React.Fragment>{listEvents}</React.Fragment>;
  }
}
function eventResponse(props) {
  const uniqueResp = props.map(response => (
    <button
      key={response.rid}
      onClick={() => {
        clickHandler(response.rid, response.linksTo);
      }}
      data-tip={response.hoverText}
    >
      {console.log(response)}
      <ReactTooltip />
      {response.rid + " - " + response.rbutton}
    </button>
  ));
  return uniqueResp;
}

function clickHandler(props, props2) {
  //console.log("prestate: " + this.state.nextEvent);
  console.log("clickhandler: " + props + " " + props2);
  //this.setState((this.state.nextEvent = props2));
  //console.log("state: " + this.state.nextEvent);
}

class GameBoxRouter extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <Route path="/" exact component={""} />
        <Route path="/NewGame" exact component={EventDataHandler} />
      </Router>
    );
  }
}

export { GameBoxRouter };
