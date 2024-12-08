import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import InquiryPage from "./components/InquiryPage";
import ShashankRender from "./shashankrender";
import AdminPanel from "./components/new/AdminPanel";
import Login from "./components/new/Login";
import { AuthProvider } from "./components/new/AuthContext";
import ProtectedRoute from "./components/new/ProtectedRoute";  // Import the provider
import VideoSection from "./components/VideoSection";
 // Import ProtectedRoute

function App() {
  return (
    <AuthProvider>
      <div className="flex items-center justify-center">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ShashankRender />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/inquiry-form" element={<InquiryPage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPanel /> {/* Only renders if logged in */}
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
