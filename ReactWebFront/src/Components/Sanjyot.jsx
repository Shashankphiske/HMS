
import Navbar from "./Navbar";
import Hero from "./Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HostelHeading from "./HostelHeading";
import VideoSection from "./VideoSection";
import RoomInfoSection from "./RoomInfoSection";
import Map from "./Map";
import FrontWelcome from "./FrontWelcome";
import Footer from "./Footer";

function Sanjyot(){
  return (
    <div className="place-content-center">
    
    <Navbar />
    <FrontWelcome/>
    <HostelHeading />
    <hr className="md:hidden"/>
    <VideoSection />
    <hr className="md:hidden"/>
    <RoomInfoSection />
    <Hero/>
    <Map />
    <Footer/>
    </div>
  );

}

export default Sanjyot;