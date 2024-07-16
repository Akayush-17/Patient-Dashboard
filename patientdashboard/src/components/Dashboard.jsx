import React, {useState} from "react";
import Sidebar from "./Sidebar";
import PatientDashboard from "./PatientDashboard";
import UserProfile from "./UserProfile";
import DoctorModal from "./DoctorModal";

const Dashboard = ({ token }) => {
  const [showProfile, setShowProfile] = useState(false)
  const [showDoctor, setShowDoctors] = useState(false)

  return (
    <div className="flex w-full">
      <div className="w-1/5">
        <Sidebar setShowProfile={setShowProfile} setShowDoctors={setShowDoctors} />
      </div>
      <div className="w-4/5 bg-gray-200 ">
        <div className={`absolute right-0 top-0 h-full transform translate duration-500 ease-in  ${showProfile ? 'w-1/2 block' : 'w-0 hidden'}`}>
          <UserProfile token={token}   />
        </div>
        <div className={`absolute right-0 top-0 h-full transform translate duration-500 ease-in  ${showDoctor ? 'w-1/2 block' : 'w-0 hidden'}`}>
         <DoctorModal token={token}/>
        </div>
        <PatientDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
