import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import React, { useState, useEffect } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] =useState(false);
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    
    if (storedToken && storedUserId) {
      setToken(storedToken);
      setUserId(storedUserId);
      setIsLoggedIn(true);
    }
    setAuthChecked(true); 
  }, []);

  const handleToken = (token, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    setToken(token);
    setUserId(userId);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setToken(null);
    setUserId(null);
    setIsLoggedIn(false);
  };
  if (!authChecked) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard userId={userId} token={token} handleLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
