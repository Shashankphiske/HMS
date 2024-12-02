import LeaveForm from "./components/LeaveForm";
import AdmissionForm from "./components/AdmissionForm";
import InquiryPage from "./components/InquiryPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import backImage from "./assets/images/backImage.jpg";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import Map from "./components/Map";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";

function ShashankRender(){

    return(
        <>
        <div className="flex items-center justify-center flex-col gap-3  bg-cover bg-center min-h-screen">
            <HomePage />
            <Services />
            <VideoSection />
            <Reviews />
            <Map />
            <Footer />
        </div>
        </>
    );
}

export default ShashankRender;