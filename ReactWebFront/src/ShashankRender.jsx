import LeaveForm from "./components/LeaveForm";
import Services from "./components/new/Services";
import NewHome from "./components/new/newHome";
import AdmissionForm from "./components/AdmissionForm";
import InquiryPage from "./components/InquiryPage";
import Navbar from "./components/Navbar";
import backImage from "/images/backImage.jpg";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import Map from "./components/Map";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import Gallery from "./Components/Gallery";

function ShashankRender(){

    return(
        <>
        <div className="flex md:justify-center justify-items-center flex-col">
            <NewHome />
            <Gallery />
            <Services />
            <Map />
            <VideoSection />
            <Footer />
        </div>
        </>
    );
}

export default ShashankRender;