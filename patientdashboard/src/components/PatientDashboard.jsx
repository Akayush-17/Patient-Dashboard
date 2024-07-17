import React from "react";
import Profile from "../assets/images (1).jpg";
import PatientMetrics from "./PatientMetrics";
import Benefits from "./Benefits";


const PatientDashboard = ({handleLogout, data}) => {
  return (
    <div className=" w-full overflow-hidden">
      <div className="bg-white p-3 flex justify-between w-full">
        <h1 className="text-2xl font-bold">Patient Dashboard</h1>
        <div className="flex items-center gap-4">
          <img src={Profile} className="rounded-full h-11 w-11 bg-contain" alt="profile" />
          <h5>{data.name}</h5>
          <button onClick={handleLogout} className=" text-white bg-red-500 hover:bg-red-600 rounded-md px-2 py-2">Logout</button>
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
              <h4 className="font-bold text-lg">Welcome, {data.name}</h4>
              <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full justify-between">
                <div>
                  <h4 className="font-semibold text-base">Date of Birth</h4>
                  <h4 className="font-normal text-base text-gray-500">{data.dob}</h4>
                </div>
                <div>
                  <h4 className="font-semibold text-base">Gender</h4>
                  <h4 className="font-normal text-base text-gray-500">{data.gender}</h4>
                </div>
                <div>
                  <h4 className="font-semibold text-base">Address</h4>
                  <h4 className="font-normal text-base text-gray-500">{data.address}</h4>
                </div>
                <div>
                  <h4 className="font-semibold text-base">Blood Group</h4>
                  <h4 className="font-normal text-base text-gray-500">{data.blood}</h4>
                </div>
                <div>
                  <h4 className="font-semibold text-base">Relative Name</h4>
                  <h4 className="font-normal text-base text-gray-500">{data.relative}</h4>
                </div>
                <div>
                  <h4 className="font-semibold text-base">Patient Age</h4>
                  <h4 className="font-normal text-base text-gray-500">{data.age}</h4>
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
