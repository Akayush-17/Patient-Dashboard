import React, { useState, useEffect } from "react";
import Close from "../assets/align-right-svgrepo-com.svg";
import Profile from "../assets/images (3).jpg";
const DoctorModal = ({ data, setShowDoctors }) => {
  if (!data) {
    return <p>Please log in to view Linked Doctors</p>;
  }

  const handleHideDoctor = () => {
    setShowDoctors(false);
  };

  return (
    <div className=" rounded-md relative h-[100vh] bg-white shadow-lg">
      <div className="bg-[#ec4899] rounded-t-md h-28 w-full p-5 gap-5 flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">Linked Doctors</h1>
          <div className=" cursor-pointer" onClick={handleHideDoctor}>
            <img src={Close} alt="close" />
          </div>
        </div>
        <img
          src={Profile}
          className="rounded-full h-20 w-20 bg-contain"
          alt="profile"
        />
      </div>
      {data ? (
        <div className="p-5">
          {data.linkedDoctors.length > 0 ? (
            <ul className="gap-4 flex flex-col pt-10">
              {data.linkedDoctors.map((doctor) => (
                <div className="bg-gray-200 font-medium p-4 flex gap-3 items-center rounded-md" key={doctor._id}>
                  <img src={Profile} alt="profile" className="h-8 w-8 rounded-full"/>
                  <li>
                    {doctor.name}
                    <div className=" font-normal">{doctor.specialization}</div>
                  </li>
                </div>
              ))}
            </ul>
          ) : (
            <p className="mt-16 font-bold text-lg">
              You dont have any linked doctors
            </p>
          )}
        </div>
      ) : (
        <p className="mt-16 font-bold text-lg">Loading Doctors...</p>
      )}
    </div>
  );
};

export default DoctorModal;
