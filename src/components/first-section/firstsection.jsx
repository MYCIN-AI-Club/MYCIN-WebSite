import React from "react";
import "./firstsection.css";
import Firstim from "../../assests/landingimg2.svg";


const firstSection = () => {
  return (
    
      
        <div className="section1">
            <div className="home_content">
              <h2 className="home_title">
               Mycin Club
              </h2>
              <p className="information1">
              Mycin is a student driven club since 2021 associated with KIET Innovative Centre focused on enhancing the practical knowledge of students by organizing the classes, seminar within the college. <br></br><br></br>The motive of the club is to create awareness about the upcoming technologies around the campus.
              
              </p>
             { /*<button className="btninside">Join us </button>*/}
            </div>
            
              <div className="section1image">
                <img src={Firstim} alt="" />
              </div>
        </div>
      
    
  );
};

export default firstSection;