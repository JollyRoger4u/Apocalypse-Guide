import React, {Component} from "react";
import {eventData} from "../Data/events"
import ReactTooltip from "react-tooltip";

export default class Event extends Component{

    fetchData = () =>{
        let eventID = parseInt(this.props.gameState.currentEvent);
        let fetchedData = eventData;
        let uniqueEvent = "oops, something went wrong"
        if(fetchedData){
            fetchedData.map(data => {
                if (data.id === eventID){
                uniqueEvent = data;
                
            }
            return uniqueEvent;    
        });
        }else{
            console.log("Data fetch error!");
            
        }
        return uniqueEvent;
        };

    eventResponse = (data) => {
      let uniqueResp = "";
      if(data.response !== undefined){
        uniqueResp = data.response.map(response => (
          <button
            key={response.rid}
            onClick={() => {
              this.clickHandler(response);
              console.log("I HAVE BEEN CLICKED!!!")
            }}
            data-tip={response.hoverText}
          >
            <ReactTooltip />
            {response.rid + " - " + response.rbutton}
          </button>
          
        ));
        return uniqueResp;
        }else{
          console.log(JSON.stringify(data, null, 2));
          return <h1>ERROR ERROR ERROR! ALARM!</h1>
        }}

    clickHandler = (btnData) =>{
      this.props.eventUpdate(btnData.linksTo);
      console.log("YES! CLICK REGISTRED")
    }

    render(){     
        let fetchedEvent = this.fetchData();
        let response = this.eventResponse(fetchedEvent);  
        let event = 
          <div className="eventBox">
            <h2 className="eventNr">{fetchedEvent.id}</h2>
            <h2> {fetchedEvent.eventTitle}</h2>
            <p>{fetchedEvent.eventText}</p>
            <div className="responseBox">{response}</div>
          </div>;
          
    return (event);
}};


export {Event};