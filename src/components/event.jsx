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
        const uniqueResp = data.response.map(response => (
          <button
            key={response.rid}
            onClick={() => {
              this.clickHandler(response);
            }}
            data-tip={response.hoverText}
          >
            <ReactTooltip />
            {response.rid + " - " + response.rbutton}
          </button>
        ));
        return uniqueResp;
        }
    clickHandler = (btnData) =>{
      console.log("CLICK");
      console.log(btnData.rid);
      console.log(btnData.linksTo)

    }

    render(){     
      console.log("render " + this.props.gameState);
      console.log(JSON.stringify(this.props.gameState, null, 2));
        let fetchedEvent = this.fetchData();
        let response = this.eventResponse(fetchedEvent);  
        let event = <div className="eventBox">
            <h2 className="eventNr">{fetchedEvent.id}</h2>
        <h2> {fetchedEvent.eventTitle}</h2>
        <p>{fetchedEvent.eventText}</p>
        <div className="responseBox">{response}</div>
        
        </div>;
    return (event);
}};


export {Event};