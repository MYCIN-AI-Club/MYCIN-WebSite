import React from "react";
import "./Footer.css";
import logo from "../../assests/logo.png";
import { Link } from "react-router-dom";

function Footer() {
	const gettotop=()=>{
		window.scrollTo({top:0,left:0,behavior:"smooth"});
	}
    return (
        <div className="footer">
            <div className="container2">
                 <div className="row">
                 <div className="footer-col footer-map-col">
                        <img className="logo2" src={logo} alt=""></img>
  	 			         <ul className="logoul ullistype">
  	 				        <li><p className="footer-item footer-map"><iframe className="iframmap" title="KietMap" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=KIET%20Group%20of%20institution%20Ghaziabad+(KIET%20Ghaziabad)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></p></li>
  	 				        <li><p className="footer-item">Email: mycin@kiet.edu</p></li>
  	 				        <li><p className="footer-item">Phone no:+91 87951 90037</p></li>
  	 				        
  	 			         </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get help</h4>
  	 			         <ul className="footer-team ullistype">
  	 				        
  	 				        <li><Link to="/Team" onClick={gettotop}>About Team</Link></li>
  	 				        <li><Link to="/Events" onClick={gettotop}>About Events</Link></li>
							<li><Link to="/Achievements" onClick={gettotop}>Achievements</Link></li>
							<li><Link to="/Resources" onClick={gettotop}>About Resources</Link></li>
  	 			         </ul>
                    </div>

                 
                    <div className="footer-col">
  	 			        <h4>Follow us</h4>
  	 			             <div className="social-links">
                                
  	 			             	
  	 				            <p><a href="https://www.instagram.com/mycin.in/" target="_blank" rel="noreferrer" ><i className="ri-instagram-fill"></i></a>Instagram</p>
  	 				            <p><a href="https://www.linkedin.com/company/mycin-in/" target="_blank" rel="noreferrer"><i className="ri-linkedin-box-fill"></i></a>Linkedin</p>
  	 			                </div>
  	 		        </div>

					
            </div>
			        <div className="creationline ">
						<p>Made with<i className="ri-heart-fill heart"></i>by MYCIN CLUB</p>
					
					   <div className="botmlin">
						<p>© 2022 Design MYCIN CLUB</p>
					   </div>
					</div>
        </div>

     </div>
    );
};
export default Footer;