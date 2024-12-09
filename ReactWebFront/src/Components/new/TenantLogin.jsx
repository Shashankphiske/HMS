import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";  // Import useAuth to update login state

const TenantLogin = () => {
  const { setIsLoggedIn } = useAuth(); // Access setIsLoggedIn from AuthContext
  const [email, setEmail] = useState(""); // State to store email input
  const [password, setPassword] = useState(""); // State to store password input
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const navigate = useNavigate(); // Hook to navigate after login

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the login endpoint
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      // If login is successful, update the login state and navigate to the admission form
      if (response.data.success) {
        alert(response.data.message); // Show success message
        setIsLoggedIn(true);  // Update login state to true
        navigate("/admission-form");  // Redirect to admission form
      }
    } catch (error) {
      // Show error message if login fails
      setErrorMessage(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-sky-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-sky-600">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Show error message if login fails */}
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-sky-500 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default TenantLogin;
