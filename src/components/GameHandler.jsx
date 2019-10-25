import React, {Component}  from "react"
import { eventData as importedEventData} from "../Data/events";
import { userDefaults } from "../Data/playerDefault"
import { EventHandler } from "./EventHandler"

export default class GameHandler extends Component{
        
        state = {
            playerState: userDefaults,
            eventData: importedEventData,
            currentEvent: "",
            lastEvent: "",            
        }
    
    render(){
        return <EventHandler props = {this.state}/>
    }
}
export {GameHandler}