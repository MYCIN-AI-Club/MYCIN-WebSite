import React from "react";
import "./Team_Card.css";



const Team_Card=({ imageSource, title, text, url1,url2,url3 })=>{
    return (
        <div className="Team_card ">
          <div className="Team_overflow">
            <img src={imageSource} alt="a wallpaper" className="Team_card-img-top" />
          </div>
          <div className="Team_card-body ">
            <h4 className="Team_card-title">{title}</h4>
            <p className="Team_card-text">
              {text
                ? text
                : ""}
            </p>
            <div className="Team_social_id">
            <a
              href={url1 ? url1 : "#!"}
              target="_blank"
              className="Team_btni"
              rel="noreferrer"
            >
              <button className="Team_btn" title="github" ><i className="ri-github-fill"></i></button>
            </a>
            <a
              href={url2 ? url2 : "#!"}
              target="_blank"
              className="Team_btni"
              rel="noreferrer"
            >
              <button className="Team_btn" title="Linkdin"><i className="ri-linkedin-box-fill"></i></button>
            </a>
            <a
              href={url3 ? url3 : "#!"}
              target="_blank"
              className="Team_btni"
              rel="noreferrer"
            >
              <button className="Team_btn" title="Instagram" ><i className="ri-instagram-fill"></i></button>
            </a>
            </div>
          </div>
        </div>
      );
}
export  default Team_Card;