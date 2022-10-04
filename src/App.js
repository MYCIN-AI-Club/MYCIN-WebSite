import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Team from "./pages/Team";
import Achievements from "./pages/Achievements"
import {Routes,Route} from "react-router-dom";
import Events from "./pages/Events";
import EventsExplore from "./components/Events/EventsExplore/EventsExplore";
import { useState } from "react";
import Resources from "./components/Resources/Resources";
import Error from "./pages/PageNotFound";

function App() {
  const [eventexploredatanew,seteventexploredatanew]=useState("");
  function EventExploreData(eventexploredata){
    seteventexploredatanew(eventexploredata);
  }
  return (<div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Team" element={<Team/>} />
      <Route path="Resources" element={<Resources/>} />
      <Route path="Achievements" element={<Achievements/>} />
      <Route path="Events" element={<Events EventExploreData={EventExploreData}/>} />
      <Route path="EventExplore" element={<EventsExplore eventexploredatanew={eventexploredatanew}/>} />
      <Route path="*" element={<Error/>}/>
    </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
