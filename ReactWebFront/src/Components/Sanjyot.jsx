import "../index.css"
import Navbar from "./Navbar";
import Hero from "./Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HostelHeading from "./HostelHeading";
import VideoSection from "./VideoSection";
import RoomInfoSection from "./RoomInfoSection";
import Map from "./Map";
import MidSection from "./MidSection";
import OwnerInfo from "./OwnerInfo";
import FormSection from "./FormSection";


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
    <MidSection />
    <OwnerInfo />
    <FormSection />

    </div>
  );

}

export default Sanjyot;