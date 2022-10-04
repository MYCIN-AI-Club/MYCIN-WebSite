import ImageSlider from "./ImageSlider";
import "./Slider.css";
import React from "react";

const App = (probs) => {
  
  const slides = [
    { url:probs.Images[0] , title: "A" },
    { url:probs.Images[1] , title: "B" },
    { url:probs.Images[2], title: "C" },
    { url:probs.Images[3], title: "D" },
    { url:probs.Images[4], title: "E" },
  ];
  
  return (
    <div>
      <div className="ContainerStyles" >
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;