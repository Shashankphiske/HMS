import Sanjyot from "./components/Sanjyot";
import "./index.css"
import ShashankRender from "./shashankrender";
import FrontWelcome from "./components/FrontWelcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import InquiryPage from "./components/InquiryPage";
import NewHome from "./components/new/newHome";


function App(){
  return <div className="flex items-center justify-center">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<NewHome />}/>
            <Route path="/about-us" element={<Aboutus />}/>
            <Route path="/inquiry-form" element={<InquiryPage />}/>
          </Routes>
        </Router>
    </div>
}

export default App;