import "./EventsExplore.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";
const EventsExplore=(probs)=>{
    const navigate=useNavigate();
    useEffect(() => {
      if (!probs.eventexploredatanew.authorized) {
        navigate('/Events');
      }
  },[probs.eventexploredatanew.authorized,navigate])
    return(
        <div className="EventExplore">
            <div className="EventExplore_post">
              {probs.eventexploredatanew.authorized?<Slider Images={probs.eventexploredatanew.imageSource} ></Slider>:null}
            </div>
            <div className="EventExplore_maincontent">
              <h3 className="EventExplore_Title">Event Details</h3>
              <h4 className="EventExplore_Name">{probs.eventexploredatanew.title}</h4>
              <p className="EventExplore_Content">{probs.eventexploredatanew.text}
            </p>
           </div>
        </div>
    );
}
export default EventsExplore;