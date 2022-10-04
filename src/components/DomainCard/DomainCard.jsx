import React from "react";
import Card from "./Cards";
import "./DomainCard.css";
import image1 from "../../assests/CodeBrewers White.png";
import image2 from "../../assests/artificialX white.png";
import image3 from "../../assests/VR FLY white.png";
import image4 from "../../assests/Eagles White.png";


function DomainCard() {
const cards = [
    {
      id: 1,
      title: "Web Development",
      image: image1,
      url: "#",
      text:"Web Development is a professional field whose existence is the soul of Internet age. E-shopping, E-transition and many other things has been accomplished by web development. Let’s learn together about this soul creation of internet age."
    },
    {
      id: 2,
      title: "ML/AI",
      image: image2,
      url: "#",
      text:"We work on solution building of complex problems using technologies like machine learning and deep learning. We analyse datasets, work on them and extract useful information from them. We also work on Computer Vision technologies to enhance presently available services."
    },
    {
      id: 3,
      title: "AR/VR",
      image: image3,
      url: "#",
      text:"Augmented Reality and Virtual Reality are the up an coming budding technologies of the decade and have potential to change the world for good. By learning these, let's dive into something new and innovate."
    },
    {
        id: 4,
        title: "Cyber Security",
        image: image4,
        url: "#",
        text:"It is a student driven domain  that focuses on information security and privacy. Our aim is to fill gaps in the existing curriculum regarding basic networking and infosec, all while preparing members for real-world scenarios and allowing for sharing of experiences and local expertise."
      }
  ];
  
  
    return (
      <div className="container ">
        <h3 className="Domain_Title">Domains</h3>
        <div className="Domain_row">
          {cards.map(({ title, image, url, text,id }) => (
            <div className="Domain_col" key={id}>
              <Card imageSource={image} title={title} url={url} text={text} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default DomainCard;