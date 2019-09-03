import React from "react";

function Event(props) {
  console.log(props);
  return (
    <div>
      <h1>test{props.id}</h1>
      <h1>{props.eventTitle}</h1>
      <h1>Event-Component active</h1>
      <p>{props.eventText}</p>
    </div>
  );
}
export default Event;
