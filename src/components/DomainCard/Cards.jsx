import React from "react";
import "./Cards.css";


function Card({ imageSource, title, text, url }) {
    return (
      <div className="card ">
        <div className="overflow">
          <img src={imageSource} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body ">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">
            {text
              ? text
              : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
          </p>
         { /*<a
            href={url ? url : "#!"}
            target="_blank"
            className="btni"
            rel="noreferrer"
          >
          <button className="btn" >Learn More</button>
            </a>*/}
        </div>
      </div>
    );
  }
  
  
  export default Card;
 