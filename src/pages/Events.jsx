import React from "react";
import Eventdetails from "../components/Events/Eventdetails";

const Events=(probs)=>{
    const SendEventExploreDataToApp=(sendeventexploredatatoapp)=>{
        probs.EventExploreData(sendeventexploredatatoapp);
    }
    return (
        <div>
        <Eventdetails SendEventExploreDataToApp={SendEventExploreDataToApp} />
        </div>
    );
}
export default Events;