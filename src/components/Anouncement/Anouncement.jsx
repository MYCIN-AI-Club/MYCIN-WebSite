import React from "react";
import "./Anouncement.css";
import Regimg from "../../assests/Announcement/facilation.jpeg";

const Anouncement=()=>{
     return (<div className="anounce">
              
                <h3 className="tittleAnounce">Announcement</h3>
                <div className="Anouncement_Container">
                <div className="anouncecontent">
                    <h4 className="Event_name">React Bootcamp Felicitation</h4>
                    <p className="eventdetails">
                    Mycin organized a Bootcamp on React Js which was held from 12th Sep, 2022 - 16th Sep, 2022. The bootcamp was a great success as it recorded more than 500 registrations from potential students within 36 hours of the announcement of the event. There were a limited number of seats for the bootcamp as it was the first ever bootcamp organized by Mycin so 50 students were shortlisted out of many registrations received.
                    </p>
                    {/*<a href="#!"><button className="registerbtn">Registe now </button></a>*/ }

                </div>
                <div className="Imgsection">
                    <img  src={Regimg} alt="" />
                </div></div>
     </div>);
};
export default Anouncement;