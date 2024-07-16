import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import React, { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [token, setToken] = useState(null)

  const handletoken = (token) => {
    setToken(token);
    console.log(token)
    setIsLoggedIn(true);
  }
  return (
    <>
      <Router>
      <div className="w-full">
        <Routes>
          <Route path="/login" element={<Login handletoken={handletoken} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard token={token} /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
