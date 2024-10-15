<<<<<<< HEAD
import React from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
     <Navbar />
    </div>
  )
=======
import "./index.css"
import InquiryPage from "./components/InquiryPage";
import AdmissionForm from "./components/AdmissionForm";
import LeaveForm from "./components/LeaveForm";


function App(){
  return (
    <div className="place-content-center">

    <LeaveForm/>
    <InquiryPage/>
    <AdmissionForm/>

    </div>
  );
>>>>>>> f4c26eccb538ec4f7fe8a9005cb849e9de3c5468
}

export default App;