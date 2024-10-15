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
}

export default App;