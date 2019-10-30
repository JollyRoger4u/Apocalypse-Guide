import React, {Component}  from "react"
import { userDefaults } from "../Data/playerDefault"
import { Event } from "./event"
import {Player} from "./player"

export default class GameHandler extends Component{
        
        state = {
            playerState: userDefaults,
            currentEvent: "90000",
            lastEvent: "",            
        }
    updateEventData = (data) =>{
        let lastEvent = this.state.currentEvent;
        let currentUpdate = data;
        if(data){
            this.setState({
                currentEvent: currentUpdate,
                lastEvent: lastEvent,
                
            });
        }else{
            console.log("setState failed in gameHandler. Event sent wrong data")
        }
        console.log(JSON.stringify(this.state, null, 2));
    }
    render(){
        let currEvent = <React.Fragment>
            <Event gameState = {this.state} updateEvent={this.updateEventData}/>
            <Player playerState = {this.state.playerState}/>
        </React.Fragment>
        return currEvent;
    }
}
export {GameHandler}