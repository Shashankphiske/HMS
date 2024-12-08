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

function ShashankRender(){

    return(
        <>
        <div className="flex items-center justify-center flex-col gap-3  bg-cover bg-center min-h-screen">
            <NewHome />
            <Services />
            <Map />
            <VideoSection />
        </div>
        </>
    );
}

export default ShashankRender;