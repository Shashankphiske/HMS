
import Navbar from "./Navbar";
import Hero from "./Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HostelHeading from "./HostelHeading";
import VideoSection from "./VideoSection";
import RoomInfoSection from "./RoomInfoSection";
import Map from "./Map";


function Sanjyot(){
  return (
    <div className="place-content-center">
    
    <Navbar />
    <Hero />
    <HostelHeading />
    <hr className="md:hidden"/>
    <VideoSection />
    <hr className="md:hidden"/>
    <RoomInfoSection />
    <Map />
    

    </div>
  );

}

export default Sanjyot;