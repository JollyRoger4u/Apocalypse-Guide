import React, { Component } from 'react';
import {eventData} from "../../Data/events"

class EventOverview extends Component {
  
  uniqueEvent = (data) =>{
    let oneEvent = "";
    oneEvent = data.map(events =>(

        <div className="briefEventBox" key={events.id}>
          <p className="briefTitle">{events.eventTitle}</p> 
          <p className="briefId">{events.id}</p>   
          <div className="briefWrapper">
            {events.response.map(resp =>(
            <p className="briefLinkTo">{resp.linksTo}</p>
          ))}</div>
        </div>  
    
    ))
    return oneEvent;
   };


    render() { 
      const eventList = eventData;
      let singleEvent = this.uniqueEvent(eventList);
      
      return <div className ="eventWrapper">
        {singleEvent}
      </div>;
      };
      
    /*}else{
      console.log("Bad data fetch")
      let error = <div className="eventBox"><h1>Could not fetch Data <br /> This is a severe error <br /> please destroy computer immediately</h1></div>
      return error;
    }*/
  }

export {EventOverview} ;
