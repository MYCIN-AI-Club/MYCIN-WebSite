import "./EventCard.css";
import { Link } from "react-router-dom";
const EventCard=({ imageSource, title,text,SendEventExplorerToEvent})=>{
  let authorized=false;
  const SendEventExplorer=()=>{
        authorized=true;
        SendEventExplorerToEvent({imageSource,text,title,authorized});
  }
    
    return (
        <div className="Event_card ">
          <div className="Event_overflow">
            <img src={imageSource[0]} alt="a wallpaper" className="Event_card-img-top" />
          </div>
          <div className="Event_card-body ">
            <h4 className="Event_card-title">{title}</h4>
            
            <Link
              to="/EventExplore"
              className="Event_btni"
              rel="noreferrer"
            >
              <button className="Event_btn"  onClick={SendEventExplorer}>View Gallery</button>
            </Link>
          </div>
        </div>
      );
}
export default EventCard;