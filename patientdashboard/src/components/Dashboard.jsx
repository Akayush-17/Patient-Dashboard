import React from "react";
import Sidebar from "./Sidebar";
import PatientDashboard from "./PatientDashboard";

const Dashboard = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-gray-200 ">
        <PatientDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
