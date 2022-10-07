import React from "react";
import TeamCard from "./Team_Card";
import "./Team_Card_memb.css";
import image1 from "../../assests/Team/Archit Srivastava.jpeg";
import image2 from "../../assests/Team/Kushagra Srivastava.jpg";
import image3 from "../../assests/Team/Kartikeya Srivastava.jpeg";
import image4 from "../../assests/Team/Tushar Sharma CS.jpeg";
import image5 from "../../assests/Team/Vaibhav Choudhary.jpeg";
import image6 from "../../assests/Team/Siddharth Chourasia.jpeg";
import image7 from "../../assests/Team/Shubhank Dwivedi CSE.jpeg";
import image8 from "../../assests/Team/ANSHIKA DUBEY.jpg";
import image9 from "../../assests/Team/ANIKET BHARDWAJ.jpg";
import image10 from "../../assests/Team/Nandini Tyagi CS.jpeg";
import image11 from "../../assests/Team/Avishi Tayal CS.jpg";
import image12 from "../../assests/Team/Prateek_Gupta.jpg";
import image13 from "../../assests/Team/Vaishnavi Awasthi.jpg";
import image14 from "../../assests/Team/Vidhi CS.jpg";
import image15 from "../../assests/Team/VISHAL P.jpeg";


const Team_Member=()=>{
    const cards = [
        {
          id: 1,
          title: "Archit Srivastava",
          image: image1,
          text:"President",
          git:"#!",
          linkdin:"https://www.linkedin.com/in/archit1203/",
          insta:"https://www.instagram.com/archit.1203?r=nametag"
          
        },
        {
          id: 11,
          title: "Avishi Tayal",
          image: image11,
          text:"Vice-President",
          git:"",
          linkdin:"https://www.linkedin.com/in/avishi-tayal-29a554216",
          insta:"https://www.instagram.com/invites/contact/?i=16akpwoabkrbg&utm_content=ljs8c48"
          
        },
        {
          id: 10,
          title: "Nandini Tyagi",
          image: image10,
          text:"Secretary",
          git:"",
          linkdin:"https://www.linkedin.com/in/nandini-tyagi-276a75213",
          insta:""
          
        },  
        {
          id: 2,
          title: "Kushagra Srivastava",
          image: image2,
          text:"Domain Head | ArtificialX",
          git:"https://github.com/kushagrathisside",
          linkdin:"https://www.linkedin.com/in/kushagrathisside/",
          insta:"https://www.instagram.com/kushagrathisside/"
          
        },
        
        {
          id: 3,
          title: "Kartikeya Srivastava",
          image: image3,
          text:"Domain Head | Eagles Cyber Squad",
          git:"",
          linkdin:"https://www.linkedin.com/in/kartikeya-srivastava-794335192",
          insta:""
          
        },
        {
            id: 4,
            title: "Tushar Sharma",
            image: image4,
            text:"Domain Head | CodeBrewers",
            git:"https://github.com/tushar2024cs1028",
            linkdin:"https://www.linkedin.com/in/tushar-sharma-40349b216",
            insta:"#!"
            
          },
          {
            id: 5,
            title: "Vaibhav Chaudhary",
            image: image5,
            text:"Domain Head | CodeBrewers",
            git:"https://github.com/PerksofbeingVaibhav",
            linkdin:"https://www.linkedin.com/in/vaibhav-chaudhary-51567320a",
            insta:"https://instagram.com/perksofbeingvaibhav?igshid=YmMyMTA2M2Y="
            
          },
          {
            id: 6,
            title: "Siddharth Chourasia",
            image: image6,
            text:"Domain Head | VRFLY",
            git:"https://github.com/why-sid",
            linkdin:"https://www.linkedin.com/in/siddharthchourasia/",
            insta:"https://www.instagram.com/siddharthhhh08/"
            
          },
          {
            id: 7,
            title: "Shubhank Dwivedi",
            image: image7,
            text:"Domain Head | VRFLY",
            git:"https://github.com/vr-cyber",
            linkdin:"https://www.linkedin.com/in/shubhank-dwivedi/",
            insta:"https://www.instagram.com/agyaat_awara/"
            
          },
          {
            id: 8,
            title: "Anshika Dubey",
            image: image8,
            text:"Lead",
            git:"https://github.com/danshika42",
            linkdin:"https://linkedin.com/in/danshika42",
            insta:"https://instagram.com/danshika42"
            
          },
          {
            id: 9,
            title: "Aniket Bhardwaj",
            image: image9,
            text:"Lead",
            git:"https://github.com/Aniket2002",
            linkdin:"https://www.linkedin.com/in/aniket-bhardwaj-b002",
            insta:"http://Instagram.com/aniketbhardwaj02"
            
          },
         
          {
            id: 12,
            title: "Prateek Gupta",
            image: image12,
            text:"Management Head",
            git:"https://github.com/Prateektuk",
            linkdin:"https://www.linkedin.com/mwlite/in/prateek-gupta-aaa891205",
            insta:"https://www.instagram.com/prt__gupta/"
            
          },
          
          {
            id: 13,
            title: "Vaishnavi Awasthi",
            image: image13,
            text:"PR Head",
            git:"https://github.com/vaishnavi-a28",
            linkdin:"https://www.linkedin.com/in/vaishnavi-awasthi-26b7151ba",
            insta:"https://www.instagram.com/invites/contact/?i=ghzio7hkvmlw&utm_content=k4rko1b"
            
          },
          {
            id: 14,
            title: "Vidhi",
            image: image14,
            text:"Graphics Head",
            git:"https://github.com/vidhi-kiet",
            linkdin:"https://www.linkedin.com/in/vidhi-pandey-a03635213",
            insta:""
            
          },
          {
            id: 15,
            title: "Vishal Panwar",
            image: image15,
            text:"Lead",
            git:"",
            linkdin:"https://www.linkedin.com/in/vishal-panwar-b32601184",
            insta:"https://instagram.com/vishalpanwarr?igshid=MmIxOGMzMTU="
            
          }

      ];
    return (
    <div className="Team_container ">
         <h3 className="Team_Title">Technical Leads</h3>
            <div className="Team_row">
               {cards.map(({ title, image, text,git,linkdin,insta, id }) => (
                  <div className="Team_col" key={id}>
                    <TeamCard imageSource={image} title={title} text={text} url1={git} url2={linkdin} url3={insta}/>
                  </div>
                  ))}
            </div>
  </div>);
}
export default Team_Member;