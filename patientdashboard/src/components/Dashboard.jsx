import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import PatientDashboard from "./PatientDashboard";
import UserProfile from "./UserProfile";
import DoctorModal from "./DoctorModal";
import InteractionModal from "./InteractionModal";
import Chatbot from "./ChatBot";
import { useNavigate } from "react-router-dom";
import ChatHistoryModal from "./ChatHistoryModal";
const Dashboard = ({ token, userId, handleLogout }) => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [showDoctor, setShowDoctors] = useState(false);
  const [showInteraction, setShowInteraction] = useState(false);
  const [showChats, setShowChats] = useState(false);

  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://patient-dashboard-bjsf.onrender.com/api/profile", {
          headers: {
            Authorization: `${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error("Error fetching profile");
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (token) {
      fetchData();
    }
  }, [token]);

  useEffect(() => {
    if (!token || !userId) {
      navigate("/login");
    }
  }, [token, userId, navigate]);

  if (!token) {
    return <p>Please log in to view your profile</p>;
  }

  return (
    <div className="flex w-full lg:h-[100vh]">
      <div className="lg:w-1/5">
        <Sidebar
          setShowProfile={setShowProfile}
          setShowChats={setShowChats}
          setShowInteraction={setShowInteraction}
          setShowDoctors={setShowDoctors}
        />
      </div>
      <div className="lg:w-4/5 w-full bg-gray-200 ">
        <div
          className={`absolute right-0 top-0 h-full transform translate duration-800 ease-in  ${
            showProfile ? "lg:w-1/4 w-full block" : "w-0 hidden"
          }`}
        >
          <UserProfile setShowProfile={setShowProfile} data={data} />
        </div>
        <div
          className={`absolute right-0 top-0 h-full transform translate duration-800 ease-in  ${
            showDoctor ? "lg:w-1/4 w-full block" : "w-0 hidden"
          }`}
        >
          <DoctorModal setShowDoctors={setShowDoctors} data={data} />
        </div>
        <div
          className={`absolute right-0 top-0 h-full transform translate duration-800 ease-in  ${
            showInteraction ? "lg:w-1/3 w-full block" : "w-0 hidden"
          }`}
        >
          <InteractionModal
            setShowInteraction={setShowInteraction}
            token={token}
          />
        </div>
        <div
          className={`absolute right-0 top-0 h-full transform translate duration-500 ease-in  ${
            showChats ? "lg:w-1/2 w-full block" : "w-0 hidden"
          }`}
        >
          <ChatHistoryModal userId={userId} setShowChats={setShowChats} />
        </div>
        <PatientDashboard data={data} handleLogout={handleLogout} />
        <Chatbot token={token} userId={userId} />
      </div>
    </div>
  );
};

export default Dashboard;
