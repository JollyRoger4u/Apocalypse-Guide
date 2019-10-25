import  React, { Component } from "react";
import Event from "./Event"

class EventHandler extends Component{
    constructor(props){
        super(props)
        let currentEvent = this.props.currentEvent
    }
    
    render(){
        console.log("eventhandler drawn")
        return
        
    /*const drawEvent = () =>{
        <Event id="currentEvent"/>
    }*/
}}
export {EventHandler}