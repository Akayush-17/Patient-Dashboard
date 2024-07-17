import React from "react";
import Profile from "../assets/profile-svgrepo-com.svg";
import PatientMetrics from "./PatientMetrics";
import Benefits from "./Benefits";


const PatientDashboard = ({handleLogout}) => {
  return (
    <div className=" w-full overflow-hidden">
      <div className="bg-white p-3 flex justify-between w-full">
        <h1 className="text-2xl font-bold">Patient Dashboard</h1>
        <div className="flex items-center gap-4">
          <img src={Profile} className="rounded-full" alt="profile" />
          <h5>Super Sick</h5>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-3">Logout</button>
        </div>
      </div>
      <div className="rounded-md bg-white my-4 p-4 mx-5">
        <div className="flex gap-8">
          <div className=" w-36 h-36">
            <img
              src={Profile}
              alt="profile"
              className="h-32 w-32 rounded-full"
            />
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-4 ">
              <h4 className="font-bold text-lg">Super Sick</h4>
              <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full justify-between">
                <div>
                  <h4 className="font-semibold text-base">Birth</h4>
                  <h4 className="font-normal text-base text-gray-300">xyz</h4>
                </div>
                <div>
                  <h4 className="font-semibold text-base">Birth</h4>
                  <h4 className="font-normal text-base text-gray-300">xyz</h4>
                </div>
                <div>
                  <h4 className="font-semibold text-base">Birth</h4>
                  <h4 className="font-normal text-base text-gray-300">xyz</h4>
                </div>
                <div>
                  <h4 className="font-semibold text-base">Birth</h4>
                  <h4 className="font-normal text-base text-gray-300">xyz</h4>
                </div>
                <div>
                  <h4 className="font-semibold text-base">Birth</h4>
                  <h4 className="font-normal text-base text-gray-300">xyz</h4>
                </div>
                <div>
                  <h4 className="font-semibold text-base">Birth</h4>
                  <h4 className="font-normal text-base text-gray-300">xyz</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PatientMetrics/>
      </div>
      <Benefits/>
    </div>
  );
};

export default PatientDashboard;
