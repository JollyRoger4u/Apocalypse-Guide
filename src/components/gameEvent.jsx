import React, { Component } from "react";
import { eventData } from "../rawdata/events";
import ReactTooltip from "react-tooltip";
import { Player, statChange } from "./player";

class EventDataHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rawEventData: eventData,
      currentEvent: "xx",
      nextEvent: "xx"
    };
  }

  render() {
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
        clickHandler(response);
      }}
      data-tip={response.hoverText}
    >
      <ReactTooltip />
      {response.rid + " - " + response.rbutton}
    </button>
  ));
  return uniqueResp;
}
function clickHandler(props) {
  //console.log("prestate: " + this.state.nextEvent);
  console.log("clickhandler: " + props.rid + " " + props.hoverText);

  //this.setState((this.state.nextEvent = props2));
  //console.log("state: " + this.state.nextEvent);
}
export { EventDataHandler };
